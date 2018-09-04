const express = require('express');
const router = express.Router();
const axios = require('axios');
const qs = require('qs');

const loginUser = (loginObject) => {
    return new Promise((resolve, reject) => {
        // FOR DEV TESTING CONVENIENCE: CODE PARAMS IN .ENV
        // const data = {
        //     client_id: process.env.CLIENT_ID,
        //     grant_type: process.env.GRANT_TYPE,
        //     email: process.env.EMAIL,
        //     password: process.env.PASSWORD,
        // }
        // END DEV TESTING CONVENIENCE
        const data = {
            client_id: loginObject.username,
            grant_type: process.env.GRANT_TYPE,
            email: loginObject.email,
            password: loginObject.password,
        }
        axios.post('https://devapi.careerprepped.com/oauth', qs.stringify(data)
        ).then(response => {
            response = response.data;
            console.log(response);
            resolve(response);
        }).catch(error => {
            console.log(error.message);
            reject(error);
        });
    })
}

router.get('/', (req, res) => {
    (async () => {
        try {
            console.log('init get login user request with req.query=')
            console.log(req.query);
            const wallData = await loginUser(req.query);
            res.send(wallData);
        } catch (error) {
            throw error;
        }
    })().catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
})

module.exports = router;

