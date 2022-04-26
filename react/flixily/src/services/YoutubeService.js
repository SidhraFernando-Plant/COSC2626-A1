// Service to send API requests to Youtube

import httpCommon from '../httpCommon_youtube';

const getTrailer = (title) => {
  return httpCommon.get('', {
    params: {
      part: 'snippet',
      maxResults: 1,
      order: 'relevance',
      q: `${title} trailer`,
    },
  });
};

export default {
  getTrailer,
};
