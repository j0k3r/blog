import dayjs from 'dayjs';
import 'dayjs/locale/fr.js';

const commontTags = ['all', 'posts'];

/**
 * Remove commont tags
 */
export const filterTags = (tags) => {
  return (tags || []).filter((tag) => !commontTags.includes(tag));
};

export default function (eleventyConfig) {
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return dayjs(dateObj).locale('fr').format('D MMMM YYYY');
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return dayjs(dateObj).format('YYYY-MM-D');
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

  eleventyConfig.addFilter('filterTagList', (tags) => {
    return filterTags(tags);
  });

  // display "related posts" based on matching tags
  eleventyConfig.addFilter('hasSomeTags', (collection, currentItemUrl, number, tags) => {
    if (!tags) {
      return [];
    }

    const newCollection = collection.filter((item) => {
      if (item.data.page.url === currentItemUrl) {
        return false;
      }

      return filterTags(tags).filter((tag) => item.data.tags.includes(tag)).length >= number;
    });

    // ensure recent posts are coming first
    return newCollection.reverse();
  });

  eleventyConfig.addFilter('limit', (array, limit) => {
    return array.slice(0, limit);
  });
}
