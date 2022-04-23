// Service to send API requests for recommendation table

import httpCommon from '../httpCommon';

const createRecommendation = (data) => {
  return httpCommon.post('/recommend', data);
};

const getRecommendations = (userBy, userTo) => {
  return httpCommon.get(`/get-recs?userBy=${userBy}&userTo=${userTo}`);
};

const updateStatus = (data) => {
  return httpCommon.post('/rec-respond', data);
};

export default {
  createRecommendation,
  updateStatus,
  getRecommendations,
};
