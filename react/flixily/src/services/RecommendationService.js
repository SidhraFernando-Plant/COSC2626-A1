// Service to send API requests for recommendation table

import httpCommon from '../httpCommon_Flixily';

const createRecommendation = (data) => {
  return httpCommon.post('/recommend', data);
};

const getRecommendations = (userBy, userTo) => {
  return httpCommon.get(`/get-recs?userBy=${userBy}&userTo=${userTo}`);
};

const getRecommendation = (recId) => {
  return httpCommon.get(`/get-rec?recId=${recId}`);
};

const getMatches = (user1, user2) => {
  return httpCommon.get(`/get-matches?user1=${user1}&user2=${user2}`);
};

const updateStatus = (data) => {
  return httpCommon.post('/rec-respond', data);
};

export default {
  createRecommendation,
  updateStatus,
  getRecommendations,
  getRecommendation,
  getMatches,
};
