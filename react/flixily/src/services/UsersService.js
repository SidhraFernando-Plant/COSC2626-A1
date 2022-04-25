// Service to send API requests for users table

import httpCommon from '../httpCommon';

const login = (data) => {
  return httpCommon.post('/login', data);
};

const getFriends = (username) => {
  return httpCommon.get(`/get-friends?username=${username}`);
};

export default {
  login,
  getFriends,
};