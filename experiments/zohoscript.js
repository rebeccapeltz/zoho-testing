// import * as dotenv from 'dotenv'
// dotenv.config();
// console.log(process.env.USER_IDENTIFIER)
import * as zoho from '@zohocrm/nodejs-sdk-2.1';




// // const zoho = require('@trifoia/zcrmsdk');
import configJson from './zoho.config.js';
// const configJson = require('./zoho.config.js');
// console.log(configJson.USER_IDENTIFIER);
// console.log(configJson)



async function initialiseClient() {
    await zoho.initialize(configJson);
}


initialiseClient()

// console.log(zoho)
// console.log(config)
// zoho.initialize(config).then((client) => {
//     console.log(client)
//     console.log(client.getRefreshToken())
//     // client.API.MODULES.get({
    //     module: 'Contacts',
    //     params: {
    //         page: 0,
    //         per_page: 25,
    //     },
    // }).then((response) => {
    //     console.log(JSON.parse(response.body));
    // }).catch(getContactsError=>{
    //     console.log(getContactsError.message)
    // });
// }).catch(configError=>{
//     console.log(configError.message)
// });