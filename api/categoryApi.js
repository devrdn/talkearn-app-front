import axios from 'axios';

export default {
  getCategories: async () => {
    const data = await axios.get('https://back.talkearn.app/api/categories/');
    return data.data;
  },
};
