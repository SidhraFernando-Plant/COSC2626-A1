// Config for axios requests which is shared across requests to UI Avatars API
import axios from 'axios';

export default axios.create({
  baseURL: 'https://ui-avatars.com/api',
  headers: {
    'content-type': 'application/json',
  },
});
