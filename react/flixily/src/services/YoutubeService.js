// Service to send API requests to Youtube

import httpCommon from '../httpCommon_youtube';

// Return the most relevant result for a search for the movie title + trailer
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
