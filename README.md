https://medium.com/swlh/weirded-out-by-zoho-crm-api-6e3fd637237d

https://www.youtube.com/watch?v=7AgEkotjpgQ

https://www.zoho.com/crm/developer/docs/api/v3/

use self client to get "code"
specify scope to  read module

ZohoCRM.settings.ALL
or
ZohoCRM.settings.READ



use code in the following to get refresh token

postman - get refresh token
https://accounts.zoho.com/oauth/v2/token?code=<grant_code>&grant_type=authorization_code&client_id=<client_id>&client_secret=<client_secret>&redirect_uri=<redirect_uri>&response_type=code&access_type=offline

{
    "access_token": "1000.3e712352dcf7cd954d377160f2fe711b.d9b06625e06352a8ff928380a2e83e27",
    "refresh_token": "1000.b701456fa6229175bee4d6f1eb3900bc.c1e5ed7fc2341a2e43e715da5876316b",
    "api_domain": "https://www.zohoapis.com",
    "token_type": "Bearer",
    "expires_in": 3600
}


Use refresh token to get access token

postman - get access token
https://accounts.zoho.com/oauth/v2/token?refresh_token={refresh_token}&client_id={client_id}&client_secret={client_secret}&grant_type=refresh_token

{
    "access_token": "1000.e00f5677271bbdd976e6773bbfc7030e.e64ff808f94a24964a6acb81dace6f19",
    "api_domain": "https://www.zohoapis.com",
    "token_type": "Bearer",
    "expires_in": 3600
}

use access token to run GET modules

curl "https://www.zohoapis.com/crm/v3/settings/modules"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa531

https://www.zohoapis.com/crm/v3/settings/modules



https://www.zoho.com/crm/developer/docs/api/v3/refresh.html

Grant Token (Authorization code)
Grant token is a one-time use token and valid for two minutes, by default. If you want to extend the expiry time, choose the required time from the drop-down while generating the token from the developer console (applicable only to self-clients).

You can generate a maximum of 10 grant tokens in a span of 10 minutes per client ID.

Access Token
Each access token is valid for one hour.

You can generate a maximum of 10 access tokens in a span of 10 minutes.

When you generate the 11th access token, the first created access token will be deleted.

Refresh Token
Refresh tokens do not expire until a user revokes them.

You can generate a maximum of 10 access tokens from a refresh token in a span of 10 minutes.

You can generate a maximum of 20 refresh tokens in a span of 10 minutes per client ID.

When you generate the 21st refresh token, the first created refresh token gets deleted.

