import axios from 'axios';

const api = axios.create({
    baseURL: 'http://siscozinhawebservice.herokuapp.com/api/v1'
});

export default api;