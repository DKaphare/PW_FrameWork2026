import { request } from "node:http";
import {test ,expect} from "../../src/Fixtures/apiFixture"; 
import{APIResponse} from "@playwright/test"

let OAUTH_CONFIG={
    tokenURL:"https://accounts.spotify.com/api/token",
    clientID:process.env.OAUTH_CLIENT_ID!,
    clientSecret:process.env.OAUTH_CLIENT_SECRET!,
    grantType:process.env.GRANT_TYPE!

}
let accessToken :string;
test.beforeEach('POST - generate the access token',async({request})=>{
  let response= await  request.post(OAUTH_CONFIG.tokenURL,{
    //the key informations are not in JSOn formt if you see in postman its on form format so we have to write form : otherwise data: will work
form:{
grant_type:OAUTH_CONFIG.grantType,
client_id:OAUTH_CONFIG.clientID,    
client_secret:OAUTH_CONFIG.clientSecret
}    
   });

    // expect(response.status()).toBe(200);
    let jsonResponse=await response.json();
    console.log("Token api response",jsonResponse);
    accessToken=jsonResponse.access_token;
    console.log("access token is",accessToken);
});
test('get albums data test',async({request})=>{
    let baseURl="https://api.spotify.com";
    let endPointURL="/v1/artists/0TnOYISbd1XYRBk9myaseg";

   let albumResponse=await request.get(`${baseURl}${endPointURL}`,{
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    });
     expect(albumResponse.status()).toBe(200);
    console.log(await albumResponse.json());

    let jsonBody = await albumResponse.json();
    console.log(jsonBody.total_tracks);
    console.log(jsonBody.external_urls.spotify);
    console.log(jsonBody.images.length);
    expect(jsonBody.images.length).toBe(3);
})

