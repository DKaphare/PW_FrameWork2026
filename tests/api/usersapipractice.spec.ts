import {APIResponse, test,request, expect} from "@playwright/test";
// import { request } from "node:http";

let AUTH_TOKEN={
    Authorization :"Bearer 268ea6b217b589211b481dfd93b9e1d1b038197270b87b8e7538894d29aa73db"
    //dont give  here , bcoz of which run option for test is not coming
};

test('get users api test',async({request})=>
{
    let response:APIResponse=await request.get("https://gorest.co.in/public/v2/users",{
        headers:AUTH_TOKEN
    });
    //if we are simply printing response in console it is not readable so will take it in the form  //of json
    let jsonBody=await response.json();
    console.log(jsonBody);
    console.log(await response.status);
    console.log(await response.statusText);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
})

test('post call users api test',async({request})=>
{
    //user JS Object:
    let userData={
        name:'Dipali Alhat',
        email:`pwdipaliAlhat_${Date.now()}@open.com`,
        gender:'female',
        status:'active'
    }
    //ideally api undersatnd JSON fromat dat so will convert this JS object into JSON
    //JS objec->JSON(Serialization) =>  JSON.stringify(userData);
    //But here the advantage is POST call internally do serialization and convert JS object to JSON

    let response:APIResponse=await request.post("https://gorest.co.in/public/v2/users",{
        headers:AUTH_TOKEN,
        data: userData
    
    });

    let jsonBody=await response.json();
    console.log(jsonBody);

    let statuscode=response.status();
    let statusText=response.statusText();

    expect(statuscode).toBe(201);
 
})

test('put call users api test',async({request})=>
{
     let userData={
        name:'Dipali Prashant Alhat',
        email:'dipaliAlhat@gmail.com',
        gender:'female',
        status:'active'
    }
    let response:APIResponse=await request.put("https://gorest.co.in/public/v2/users/8666734",{
        headers:AUTH_TOKEN,
        data:userData
    });
    //if we are simply printing response in console it is not readable so will take it in the form  //of json
    let jsonBody=await response.json();
    console.log(jsonBody);
    console.log(await response.status);
    console.log(await response.statusText);

    // expect(response.status()).toBe(200);
   
})