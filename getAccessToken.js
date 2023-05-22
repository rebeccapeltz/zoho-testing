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

async function doit(api) {
  const response = await fetch(api, {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  console.log(data);
}

const getAccessTokenURL = "https://accounts.zoho.com/oauth/v2/token?";
const postData = {
  code: "1000.0c5c5e3d2d5355349b7c1ffd9f623713.4a20561b6be43d2dc79a77c1804ff51f",
  grant_type: "authorizaton_code",
  client_id: `${process.env.CLIENT_ID}`,
  client_secret: `${process.env.CLIENT_SECRET}`,
  reponse_type: "code",
  access_type: "offline",
};
console.log(postData);

const api = `https://accounts.zoho.com/oauth/v2/token?refresh_token=${refreshToken}&client_id=${postData.client_id}&client_secret=${postData.client_secret}&grant_type=refresh_token`;

console.log(api);

doit(api);
