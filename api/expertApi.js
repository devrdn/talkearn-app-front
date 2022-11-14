import axios from 'axios';

export default {
  getFeaturedExperts: async () => {
    const experts = await axios.get(
      'https://back.talkearn.app/api/experts/featured'
    );
    return experts.data;
  },
};
