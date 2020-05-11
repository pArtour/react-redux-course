import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WmZ0Z8T_vNPv8J-6mFtWVmQjEhMqy3RIAozYCT8ViPQ'
    }
});