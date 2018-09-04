import axios from 'axios';

export function callGetAuthenticationData (loginObject) {
    const params = loginObject
    console.log(params);
    console.log('init axios GET for login');
    return axios.get(`/api/login`, {params})
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