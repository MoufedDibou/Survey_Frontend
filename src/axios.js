import axios from 'axios';
import Store from'./store';

const axiosClient= axios.create({
    baseURL:'http://127.0.0.1:8000/api'
})

axiosClient.interceptors.request.use(config =>{

    config.headers.Authorization= `Bearer ${Store.state.data.token}`
    return config;
})

export default axiosClient;