import axios from 'axios';

export function callGetAuthenticationData () {
    return axios.get(`/api/login`)
    .then(response => response.data)
    .catch((error) => {
        throw error.response || error;
    });
}

export function callGetWallData (accessToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    return axios.get('https://devapi.careerprepped.com/discussion/wall', config )
    .then(response => response.data)
    .catch((error) => {
        throw error.response || error;
    });
}