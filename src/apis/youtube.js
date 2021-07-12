import axios from 'axios';

const KEY = 'AIzaSyCQd_lW8UuN28FnAVFoP13l59D3IyU_S78';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
