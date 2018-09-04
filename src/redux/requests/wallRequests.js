import axios from 'axios';



export function callGETWallComments(accessToken, arrayOfCommentIDs) {
    let commentID;
    let arrayOfComments = [];
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    for (let i = 0; i < arrayOfCommentIDs.length; i++) {
        commentID = arrayOfCommentIDs[i];
        arrayOfComments.push(
            axios.get(`https://devapi.careerprepped.com/discussion/wall_comment/${commentID}`, config
        )
            .then(response => response.data)
            .catch((error) => {
                throw error.message || error;
            })
        );
    }
    return arrayOfComments;
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

export function callGETWallPosts(accessToken, arrayOfPostIDs) {
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

export function callPOSTWallComment(commentData) {
    console.log('init callPOSTwallComment');
    const accessToken = commentData.accessToken;
    const comment = commentData.commentBody;
    const wall = commentData.postID;
    const config = {
        'Authorization': `Bearer ${accessToken}`,
    }
    const params = {
        comment,
        wall,
    }
    return axios({
        method: "POST",
        url: `https://devapi.careerprepped.com/discussion/wall_comment`,
        headers: config,
        data: params,
    })
        .then(response => response.data)
        .catch((error) => {
            throw error.message || error;
        });
}

export function callPOSTWallPost(postData) {
    console.log('init callPOSTwallPost');
    const accessToken = postData.accessToken;
    const postBody = postData.postBody;
    const permissions = 1;
    // see API docs for permission level clarifications
    const config = {
        'Authorization': `Bearer ${accessToken}`,
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