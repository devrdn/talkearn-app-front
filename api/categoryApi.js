import axios from 'axios';

export default {
  getCategories: async () => {
    const data = await axios
      .get('https://back.talkearn.app/api/categoriess/')
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
    return data.data;
  },
};
