import * as ZOHOCRMSDK from '@zohocrm/nodejs-sdk-2.1';

class Initializer {
    static async initialize() {

        /*
         * Create an UserSignature instance that takes user Email as parameter
         */
        let user = new ZOHOCRMSDK.UserSignature(process.env.ADMIN_EMAIL_ADDRESS);

        /*
         * Configure the environment
         * which is of the pattern Domain.Environment
         * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
         * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
         */
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION()

        /*
         * Create a Token instance
         * clientId -> OAuth client id.
         * clientSecret -> OAuth client secret.
         * grantToken -> GRANT token.
         * redirectURL -> OAuth redirect URL. Default value is null
         */
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId(process.env.SELF_CLIENT_CLIENT_ID)
            .clientSecret(process.env.SELF_CLIENT_CLIENT_ID)
            .grantToken(process.env.SELF_CLIENT_TEMPORARY_GRANT_TOKEN)
            .redirectURL(process.env.REDIRECT_URL)
            .build();

        /*
         * TokenStore can be any of the following
         * DB Persistence - Create an instance of DBStore
         * File Persistence - Create an instance of FileStore  ** using this to save refresh token
         * Custom Persistence - Create an instance of CustomStore
         */
        const tokenstore_location = `${absolute_path}nodejs_sdk_tokens.txt`
        console.log("tokenstore_location", tokenstore_location)
        let tokenstore = new ZOHOCRMSDK.FileStore(tokenstore_location)


        /*
            * Set the following in InitializeBuilder
            * user -> UserSignature instance required
            * environment -> Environment instance required
            * token -> Token instance required
            * store -> TokenStore instance
            * SDKConfig -> SDKConfig instance
            * resourcePath -> resourcePath
            * logger -> Logger instance. Default value is null
            * requestProxy -> RequestProxy instance. Default value is null
            */
        // The SDK can be initialized by any of the following methods
        (await new ZOHOCRMSDK.InitializeBuilder())
        .user(user)
        .environment(environment)
        .token(token)
        .store(tokenstore)
        .initialize()
        .catch((err) => {
            console.log(err);
        });
    }
}

Initializer.initialize(); 