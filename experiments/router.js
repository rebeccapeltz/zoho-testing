const express = require('express');
let router = express.Router()
const zoho = require('@trifoia/zcrmsdk');
const config = require('./zoho.config.js');

router.get('/',(req, res, next) => {
    res.json({"message":"hello"})
})

router.get('/contacts', (req, res, next) => {
    // res.json({"message":"contacts"})
    console.log("in contacts")

    zoho.initialize(config).then((client) => {
        client.API.MODULES.get({
            module: 'Contacts',
            params: {
                page: 0,
                per_page: 25,
            },
        }).then((response) => {
            res.json(JSON.parse(response.body));
        }).catch(next);
    }).catch(next);
});
module.exports = zoho


