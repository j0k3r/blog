import fs from 'node:fs';
import { HtmlBasePlugin, IdAttributePlugin, InputPathToUrlTransformPlugin } from '@11ty/eleventy';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import pluginNavigation from '@11ty/eleventy-navigation';
import { feedPlugin } from '@11ty/eleventy-plugin-rss';
import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import dayjs from 'dayjs';

import pluginFilters, { filterTags } from './_config/filters.js';

export default async function (eleventyConfig) {
  // Drafts, see also _data/eleventyDataSchema.js
  eleventyConfig.addPreprocessor('drafts', '*', (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === 'build') {
      return false;
    }
  });

  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig
    .addPassthroughCopy({
      './public/': '/',
    })
    .addPassthroughCopy('./content/feed/pretty-atom-feed.xsl');

  // Run Eleventy when these files change:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

  // Watch images for the image pipeline.
  eleventyConfig.addWatchTarget('content/**/*.{svg,webp,png,jpg,jpeg,gif}');

  // Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
  // Adds the {% css %} paired shortcode
  eleventyConfig.addBundle('css', {
    toFileDirectory: 'dist',
  });
  // Adds the {% js %} paired shortcode
  eleventyConfig.addBundle('js', {
    toFileDirectory: 'dist',
  });

  // Official plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  eleventyConfig.addPlugin(feedPlugin, {
    type: 'atom', // or "rss", "json"
    outputPath: '/feed.xml',
    stylesheet: 'feed/pretty-atom-feed.xsl',
    collection: {
      name: 'posts',
      limit: 10,
    },
    metadata: {
      language: 'fr',
      title: 'j0k3r.n3t',
      subtitle: 'This is a longer description about your blog.',
      base: 'https://www.j0k3r.net/',
      author: {
        name: 'Jérémy Benoist',
      },
    },
  });

  // Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // Output formats for each image.
    formats: ['avif', 'webp', 'auto'],

    // widths: ["auto"],

    htmlOptions: {
      imgAttributes: {
        // e.g. <img loading decoding> assigned on the HTML tag will override these values.
        loading: 'lazy',
        decoding: 'async',
      },
    },

    sharpOptions: {
      animated: true,
    },

    // because a lot of old articles have dead images
    failOnError: false,
  });

  // Filters
  eleventyConfig.addPlugin(pluginFilters);

  eleventyConfig.addPlugin(IdAttributePlugin, {
    // by default we use Eleventy’s built-in `slugify` filter:
    // slugify: eleventyConfig.getFilter("slugify"),
    // selector: "h1,h2,h3,h4,h5,h6", // default
  });

  eleventyConfig.addShortcode('currentBuildDate', () => {
    return new Date().toISOString();
  });

  eleventyConfig.addShortcode('svg', (file) => {
    const relativeFilePath = `./public/svg/${file}.svg`;
    const data = fs.readFileSync(relativeFilePath, (err, contents) => {
      if (err) return err;
      return contents;
    });

    return data.toString('utf8');
  });

  // Features to make your build faster (when you need them)

  // If your passthrough copy gets heavy and cumbersome, add this line
  // to emulate the file copy on the dev server. Learn more:
  // https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

  // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  eleventyConfig.addPassthroughCopy({ 'public/favicon': '/' });

  eleventyConfig.addDateParsing((dateValue) => {
    return dayjs(dateValue).toDate();
  });

  // build list of tags with number of contents per tag sorted by most contennts per tag
  eleventyConfig.addCollection('tagsList', (collection) => {
    const tagsObject = {};
    for (const item of collection.getAll()) {
      if (item.data.tags) {
        for (const tag of filterTags(item.data.tags)) {
          if (typeof tagsObject[tag] === 'undefined') {
            tagsObject[tag] = 1;
          } else {
            tagsObject[tag] += 1;
          }
        }
      }
    }

    const tagList = [];
    for (const tagObject of Object.keys(tagsObject)) {
      tagList.push({ tagName: tagObject, tagCount: tagsObject[tagObject] });
    }

    return tagList.sort((a, b) => b.tagCount - a.tagCount);
  });
}

export const config = {
  // Control which files Eleventy will process
  // e.g.: *.md, *.njk, *.html, *.liquid
  templateFormats: ['md', 'njk', 'html', 'liquid', '11ty.js'],

  // Pre-process *.md files with: (default: `liquid`)
  markdownTemplateEngine: 'njk',

  // Pre-process *.html files with: (default: `liquid`)
  htmlTemplateEngine: 'njk',

  // These are all optional:
  dir: {
    input: 'content', // default: "."
    includes: '../_includes', // default: "_includes" (`input` relative)
    data: '../_data', // default: "_data" (`input` relative)
    output: '_site',
  },

  // -----------------------------------------------------------------
  // Optional items:
  // -----------------------------------------------------------------

  // If your site deploys to a subdirectory, change `pathPrefix`.
  // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

  // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
  // it will transform any absolute URLs in your HTML to include this
  // folder name and does **not** affect where things go in the output folder.

  // pathPrefix: "/",
};
