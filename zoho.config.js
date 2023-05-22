import * as dotenv from 'dotenv'
dotenv.config();
console.log(process.env.USER_IDENTIFIER)
export default  {
  "client_id": process.env.CLIENT_ID,
  "client_secret": process.env.CLIENT_SECRET,
  "redirect_url": process.env.REDIRECT_URL,
  "refresh_token": process.env.REFRESH_TOKEN,
  "code": process.env.REFRESH_TOKEN,
  "iamurl": process.env.IAMURL,
  "base_url": process.env.BASE_URL,
  "user_identifier": process.env.USER_IDENTIFIER
};
