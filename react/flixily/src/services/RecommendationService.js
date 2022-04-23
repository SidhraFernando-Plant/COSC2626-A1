// Service to send API requests for recommendation table

import httpCommon from '../httpCommon';

const createRecommendation = (data) => {
  return httpCommon.post('/recommend', data);
};

const getRecommendations = (userBy, userTo) => {
  return httpCommon.get(`/get-recs?userBy=${userBy}&userTo=${userTo}`);
};

export default {
  createRecommendation,
};
