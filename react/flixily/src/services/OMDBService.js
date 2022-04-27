// Service to send API requests to OMDB (Open Movie Database)

import httpCommon from '../httpCommon_OMDB';

// Get all info about a movie with the given title
const getMovie = (title) => {
  return httpCommon.get('/', { params: { t: title, plot: 'full' } });
};

export default {
  getMovie,
};
