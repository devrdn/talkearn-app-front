import axios from 'axios';

export default {
  getFeaturedExperts: async () => {
    return await axios.get('https://back.talkearn.app/api/experts/featured');
  },
};