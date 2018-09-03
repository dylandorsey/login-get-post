import axios from 'axios';

export function callGetAuthenticationData () {
    return axios.get(`/api/login`)
    .then(response => response.data)
    .catch((error) => {
        throw error.response || error;
    });
}