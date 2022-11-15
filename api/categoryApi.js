import axios from 'axios';

export default {
  getCategories: async () => {
    return await axios.get('https://back.talkearn.app/api/categories/');
  },
};
