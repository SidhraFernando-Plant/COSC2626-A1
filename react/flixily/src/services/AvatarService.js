// Service to send API requests to UI Avatars

import httpCommon from '../httpCommon_Avatars';

const getAvatar = (username) => {
  return httpCommon.get('/', { params: { name: 'John Doe' } });
};

export default {
  getAvatar,
};
