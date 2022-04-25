// Config for axios requests which is shared across requests to OMDB API
import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=d432a0c8&',
  headers: {
    'content-type': 'application/json',
  },
});
