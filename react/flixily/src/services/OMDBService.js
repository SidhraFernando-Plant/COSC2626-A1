// Service to send API requests to OMDB (Open Movie Database)

import httpCommon from '../httpCommon_OMDB';

const getMovie = (title) => {
  return httpCommon.get('/', { params: { t: title, plot: 'full' } });
};

export default {
  getMovie,
};
