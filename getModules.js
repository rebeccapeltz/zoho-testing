import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.USER_IDENTIFIER);
console.log(`${process.env.CLIENT_ID}`);
console.log(`${process.env.CLIENT_SECRET}`);

const refreshToken =
  "1000.a25e91b76a902697e393afdd860aec3d.0763c8431f2b041ba54281b8b34e09ee";

// Get an Access Token from a Refresh token
// Before you can run this you must make a Self Client in the Zoho Console
// Use ZohoCRM.settings.READ for the scope because we'll be reading modules
// Give yourself at lease 5 minutes to copy and paste the "code" into this data
// After you run this save the Refresh Token

async function doit(api, headers) {
  const response = await fetch(api, {
    method: "get",
    headers: headers,
  });
  const data = await response.json();

  console.log(data);
}

const getAccessTokenURL = "https://accounts.zoho.com/oauth/v2/token?";
const getData = {
  code: "1000.0c5c5e3d2d5355349b7c1ffd9f623713.4a20561b6be43d2dc79a77c1804ff51f",
  grant_type: "authorizaton_code",
  client_id: `${process.env.CLIENT_ID}`,
  client_secret: `${process.env.CLIENT_SECRET}`,
  reponse_type: "code",
  access_type: "offline",
};
console.log(getData);
const access_token = '1000.c47d9e7f1238c23aba10e0b1ebfe7d30.1cf4e835dc87be0344a003f613aa384c'
const headers = { 'Authorization': `Zoho-oauthtoken ${access_token}`}; 
console.log(headers)
// 'Zoho-oauthtoken 1000.4115eefcb07635d91cd6f83f1950ed98.335533c7ef4a034290d0ca0b3f34012d'
const api = `https://www.zohoapis.com/crm/v3/settings/modules`
console.log(api, headers);

doit(api,headers);
