/*Schema->type of response 
data explanation-> when i am hitting api and api wants some data in form of string and i am provding in the form of number
//this is then violation
//PW is not having something to check schmea so here we have to use third party thing ajv which is provided by nodJS
//if we remove required variables still the test will be passed no issue only type will going tobe check in schema validation
//but if we add any required varaibale we have to add in our JSON
install command ->npm install ajv */

import {test ,expect} from "../../src/Fixtures/apiFixture";
import Ajv from "ajv";
import fs from "fs";

const TOKEN =process.env.API_TOKEN!;

let AUTH_Header={
    Authorization :`Bearer ${TOKEN}`

};

let ajv= new Ajv();
 
//define your schema->to create schmea go to schema generator->copy your schmea paste in thes
//schema generator tool  https://transform.tools/json-to-json-schema

//define JSON Schema
/*
let userSchema=
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "gender": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "email",
    "gender",
    "status"
  ]
};

let userArraySchema={
    "type":"array",
    "items":userSchema
}
test('get a user schema',async({AH})=>{

    let UserData={
        name:'Advait',
        email:`Advait_${Date.now()}@open.com`,
        gender:'male',
        status:'active'
    };
*/
    // let Postresponse=await AH.post('/public/v2/users',UserData,AUTH_Header);
    // expect(Postresponse.status).toBe(201);
    // let UID=await Postresponse.body.id;
    // console.log("User crete and ID is ",UID);

    //get Method
    let Getresponse=await AH.get(`/public/v2/users/`,AUTH_Header);
    expect(Getresponse.status).toBe(200);

    //verify response schema 
    let validate=ajv.compile(JSON.parse(fs.readFileSync('src/schema/userSchema.json','utf-8')); //here userschema will get compile
   let isSchemaValid= validate(Getresponse.body); 
   //validate variable where userchema compile result is stored that will check withGet method responses body
   if(!isSchemaValid){
    console.log("Schema Errors",validate.errors);
   }

   expect(isSchemaValid).toBeTruthy();  
})

test('get all user schema',async({AH})=>{

    //get All Users Method
    let Getresponse=await AH.get(`/public/v2/users/`,AUTH_Header);
    expect(Getresponse.status).toBe(200);

    //verify response schema 
    // let validate=ajv.compile(userArraySchema); //here userschema will get compile
    let validate=ajv.compile(JSON.parse(fs.readFileSync('src/schema/userSchema.json','utf-8'))); 
    let isSchemaValid= validate(Getresponse.body); 
    //validate variable where userchema compile result is stored that will check withGet method responses body
     if(!isSchemaValid){
     console.log("Schema Errors",validate.errors);
     }

   expect(isSchemaValid).toBeTruthy();  
})

//Note->When your passing schema data from other file you need to prvide path of your schema file 
//read the file and then change JSON to javascript object
// let validate=ajv.compile(JSON.parse(fs.readFileSync('src/schema/userSchema.json','utf-8')); //here userschema will get compile