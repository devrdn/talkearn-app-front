import axios from 'axios';

export default {
  getFeaturedExperts: async () => {
    return await axios.get('https://back.talkearn.app/api/experts/featured');
  },

  getExpertBySlug: async (categorySlug, expertSlug) => {
    return await axios.get('https://back.talkearn.app/api/expert', {
      params: {
        slug: expertSlug,
        category_slug: categorySlug,
      },
    });
  },

  getExpertsByCategory: async (categoryId, pageNum) => {
    return await axios.get('https://back.talkearn.app/api/experts', {
      params: {
        category_id: categoryId,
        page: pageNum,
      },
    });
  },

  searchExpert: async (searchText) => {
    return await axios.get('https://back.talkearn.app/api/experts/search', {
      params: {
        find: searchText,
      },
    });
  },
};
