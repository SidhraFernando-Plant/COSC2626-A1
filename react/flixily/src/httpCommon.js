// Config for axios requests which is shared across requests
import axios from 'axios';

export default axios.create({
  baseURL: 'https://mur5dtuyqi.execute-api.us-east-1.amazonaws.com/prod',
  headers: {
    'content-type': 'application/json',
  },
});
