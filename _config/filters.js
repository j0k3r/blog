import { DateTime } from 'luxon';

const commontTags = ['all', 'posts'];

/**
 * Convert flat tag (string comma separated) to array
 */
const convertTags = (tags) => {
  const newTags = [];

  for (const tag of tags || []) {
    if (tag?.includes(' ')) {
      for (const tagLower of tag.split(' ')) {
        newTags.push(tagLower);
      }
    } else {
      newTags.push(tag);
    }
  }

  return newTags;
};

/**
 * Same as previous function but without commont tags
 */
const convertAndFilterTags = (tags) => {
  return convertTags(tags).filter((tag) => !commontTags.includes(tag));
};

export default function (eleventyConfig) {
  eleventyConfig.addFilter('readableDate', (dateObj, format, zone) => {
    if (typeof dateObj === 'string') {
      return DateTime.fromISO(dateObj, {
        zone: zone || 'utc',
        locale: 'fr',
      }).toFormat(format || 'd LLLL yyyy');
    }

    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, {
      zone: zone || 'utc',
      locale: 'fr',
    }).toFormat(format || 'd LLLL yyyy');
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: 'utc', locale: 'fr' }).toFormat(
      'yyyy-LL-d',
    );
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter('min', (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  // Return the keys used in an object
  eleventyConfig.addFilter('getKeys', (target) => {
    return Object.keys(target);
  });

  eleventyConfig.addFilter('filterTagList', (tags) => {
    return convertAndFilterTags(tags);
  });

  eleventyConfig.addFilter(
    'hasSomeTags',
    function hasSomeTags(collection, currentItemUrl, number, tags) {
      if (!tags) {
        return [];
      }

      return collection.filter((item) => {
        if (item.data.page.url === currentItemUrl) {
          return false;
        }

        return (
          convertAndFilterTags(tags).filter((tag) =>
            item.data.tags.includes(tag),
          ).length >= number
        );
      });
    },
  );

  eleventyConfig.addFilter('limit', (array, limit) => {
    return array.slice(0, limit);
  });
}
