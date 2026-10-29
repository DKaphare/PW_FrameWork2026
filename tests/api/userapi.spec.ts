import {test ,expect} from "../../src/Fixtures/apiFixture";

const TOKEN =process.env.API_TOKEN!;

let AUTH_Header={
    Authorization :`Bearer ${TOKEN}`

};
let userid: number;
//steps
//get all users
//post the data
//using id get the data
//put to update data
//delete the data

test.describe.serial('runing CRUD e2e test case',()=>{
//GET Test
test('get Test',async({AH})=>
{
    let response=await AH.get('/public/v2/users/');
    
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    
    
});
test('post test',async({AH})=>{
let userData={
    name:'Sharu Dipali Prashant Pr Alhat',
    email:'sharu12345678910@gmail.com',
    gender:'female',
    status:'active'
};

    let response=await AH.post('/public/v2/users',userData,AUTH_Header);
    expect((response).status).toBe(201);
    expect((response).statusText).toBe("Created");
     userid=response.body.id;
    console.log("create new userID is",userid);
});
test('put test',async({AH})=>{
let userData={
    name:'Sharu Prashant P Alhat',
    email:'sharu12ffgwh@gmail.com',
    gender:'female',
    status:'active'
};
    let response=await AH.put(`/public/v2/users /${userid}`,userData,AUTH_Header);

    console.log("Status code is",response.status);
    console.log("Status Text is",response.statusText);
    // expect(response.status).toBe(404);
    // expect(response.statusText).toBe("Not Found");
    
});

});