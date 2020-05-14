import axios from 'axios';

const KEY = 'AIzaSyAsbsQhNNOzYzB4uMRD9iAXMBkRf3dkiao';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
