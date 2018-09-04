import axios from 'axios';

export function callPOSTWallPost(postData) {
    console.log('init callPOSTwallPost');
    const accessToken = postData.accessToken;
    const postBody = postData.postBody;
    const permissions = 1;
    // see API docs for permission level clarifications
    const config = {
        'Authorization': `Bearer ${accessToken}`,
        // 'Content-Type': `application/json`
    }
    const params = {
        post: postBody,
        permissions
    }
    return axios({
        method: "POST",
        url: `https://devapi.careerprepped.com/discussion/wall`,
        headers: config,
        data: params,
    })
        .then(response => response.data)
        .catch((error) => {
            throw error.message || error;
        });
}

export function callGetWallData(accessToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    return axios.get('https://devapi.careerprepped.com/discussion/wall', config)
        .then(response => response.data)
        .catch((error) => {
            throw error.message || error;
        });
}

export function callGetWallPosts(accessToken, arrayOfPostIDs) {
    let postID;
    let arrayOfPosts = [];
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    for (let i = 0; i < arrayOfPostIDs.length; i++) {
        postID = arrayOfPostIDs[i];
        arrayOfPosts.push(axios.get(`https://devapi.careerprepped.com/discussion/wall/${postID}`, config)
            .then(response => response.data)
            .catch((error) => {
                throw error.message || error;
            })
        );
    }
    return arrayOfPosts;
}