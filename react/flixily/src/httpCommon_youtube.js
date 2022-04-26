// Config for axios requests which is shared across requests to Youtube API
import axios from 'axios';

export default axios.create({
  baseURL:
    'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDGYZyruEOI2KGUCcL3ifAQpDqiwGirsEY',
  headers: {
    'content-type': 'application/json',
  },
});
