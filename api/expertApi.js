import axios from 'axios';

export default {
  /**
   * Fetch featured Experts
   * @returns Promise
   */
  getFeaturedExperts: async () => {
    return await axios.get('https://back.talkearn.app/api/experts/featured');
  },

  /**
   * Fetch one expert by category slug and expert slug
   * @param {String} categorySlug
   * @param {String} expertSlug
   * @returns Promise
   */
  getExpertBySlug: async (categorySlug, expertSlug) => {
    return await axios.get('https://back.talkearn.app/api/expert', {
      params: {
        slug: expertSlug,
        category_slug: categorySlug,
      },
    });
  },

  /**
   * Fetch experts by category id
   * @param {Integer} categoryId
   * @param {Integer} pageNum
   * @returns Promise
   */
  getExpertsByCategory: async (categoryId, pageNum) => {
    return await axios.get('https://back.talkearn.app/api/experts', {
      params: {
        category_id: categoryId,
        page: pageNum,
      },
    });
  },

  /**
   * Fetch experts by search text
   * @param {String} searchText
   * @returns Promise
   */
  searchExpert: async (searchText, pageNum) => {
    return await axios.get('https://back.talkearn.app/api/experts/search', {
      params: {
        find: searchText,
        page: pageNum,
      },
    });
  },

  setExpert: async (expert) => {
    return await axios.post('https://back.talkearn.app/api/expert', expert, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
