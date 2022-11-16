import axios from 'axios';

export default {
  getCategories: async () => {
    return await axios.get('https://back.talkearn.app/api/categories/');
  },

  getCategoryBySlug: async (categorySlug) => {
    return await axios.get(
      'https://back.talkearn.app/api/category?slug=investments',
      {
        params: {
          slug: categorySlug,
        },
      }
    );
  },
};
