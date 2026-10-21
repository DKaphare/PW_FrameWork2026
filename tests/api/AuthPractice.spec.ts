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

test.beforeEach('POST-generate the access token',async({request})=>{


    let responseForToken= await request.post(OAUTH_CONFIG.tokenURL,{
        form:{
            grant_type:OAUTH_CONFIG.grantType,
            client_id:OAUTH_CONFIG.clientID,
            client_secret:OAUTH_CONFIG.clientSecret
        }
    });

    let jsonResponse=await responseForToken.json();
    accessToken=jsonResponse.access_token;
    console.log(accessToken);

});

test('get AudioBooks data',async({request})=>{

    let baseURl="https://api.spotify.com";
    let endPointURL="https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg";

    let audioBookResponse=await request.get(`${baseURl} ${endPointURL}`,{
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    });
    expect(audioBookResponse.status()).toBe(200);
    console.log(audioBookResponse.json);
})
