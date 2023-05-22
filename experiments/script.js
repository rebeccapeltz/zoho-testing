const zoho = require('@trifoia/zcrmsdk');
const config = require('./zoho.config.js');

// console.log(zoho)
// console.log(config)
zoho.initialize(config).then((client) => {
    // console.log(client)
    client.API.MODULES.get({
        module: 'Contacts',
        params: {
            page: 0,
            per_page: 25,
        },
    }).then((response) => {
        console.log(JSON.parse(response.body));
    }).catch(getContactsError=>{
        console.log(getContactsError.message)
    });
}).catch(configError=>{
    console.log(configError.message)
});