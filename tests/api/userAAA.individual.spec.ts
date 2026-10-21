import { apiHelper } from "../../src/api/apiHelper";
import {test ,expect} from "../../src/Fixtures/apiFixture";

const TOKEN =process.env.API_TOKEN!;

let AUTH_Header={
    Authorization :`Bearer ${TOKEN}`

};
let userData:object;
async function createUser(apiHelper:any){
    let userData={
    name:'Sharu automation',
    email:`sharu_${Date.now()}@open.com`,
    gender:'female',
    status:'active'
};
let response=await apiHelper.post('/public/v2/users',userData,AUTH_Header);
expect(response.status).toBe(201);
return response.body;

}

//Test case 1->Create user test + verify :AAA

// POST->UserID->get/userID>verify

test('create a user ',async({AH})=>{
    //create a user
    let userResponse=await createUser(AH);
    //get a user
    let getResponse=await AH.post(`/public/v2/users/${userResponse.id}`,AUTH_Header);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.name).toBe('Sharu automation')

})
//Test Case 2- Update the user
test('update the user',async({AH})=>{
    //1.Create a user
    let userResponse=await createUser(AH);
    //2.get a user
    let getResponse=await AH.get(`/public/v2/users/${userResponse.id}`,AUTH_Header);
    expect(getResponse.status).toBe(200);
    
    //3.update a user
    let userUpdatedData={
         gender:'male',
        status:'active'
    };

    let UpdatedResponse=await AH.put(`/public/v2/users/${userResponse.id}`,userUpdatedData,AUTH_Header);
    expect(UpdatedResponse.status).toBe(200);
    expect(UpdatedResponse.body.status).toBe(userUpdatedData.status);
    expect(UpdatedResponse.body.gender).toBe(userUpdatedData.gender);
    

    //4.Check the updated user information
    getResponse=await AH.get(`/public/v2/users/${userResponse.id}`,AUTH_Header);
    expect(UpdatedResponse.status).toBe(200);
    expect(UpdatedResponse.body.status).toBe(userUpdatedData.status);
    expect(UpdatedResponse.body.gender).toBe(userUpdatedData.gender);
   
})

//Test Case 2- Delete the user
test('delete the user',async({AH})=>{
    //1.Create a user
    let userResponse=await createUser(AH);
    //2.get a user
    let getResponse=await AH.get(`/public/v2/users/${userResponse.id}`,AUTH_Header);
    expect(getResponse.status).toBe(200);
    
    //3.update a user
    let userUpdatedData={
         gender:'male',
        status:'active'
    };

    let UpdatedResponse=await AH.put(`/public/v2/users/${userResponse.id}`,userUpdatedData,AUTH_Header);
    expect(UpdatedResponse.status).toBe(200);
    expect(UpdatedResponse.body.status).toBe(userUpdatedData.status);
    expect(UpdatedResponse.body.gender).toBe(userUpdatedData.gender);
    

    //4.Check the updated user information
    let getResponseGet=await AH.get(`/public/v2/users/${userResponse.id}`,AUTH_Header);
    expect(getResponseGet.status).toBe(200);
    expect(getResponseGet.body.status).toBe(userUpdatedData.status);
    expect(getResponseGet.body.gender).toBe(userUpdatedData.gender);

    //5.delete the user

    let getResponseAfterDelete=await AH.delete(`/public/v2/users/${userResponse.id}`,AUTH_Header);


    let ResponseDeletedData=await AH.get(`/public/v2/users/${userResponse.id}`,AUTH_Header);
    expect(ResponseDeletedData.status).toBe(204);
  
    console.log(ResponseDeletedData.status);
    // expect(getResponseGet.body.gender).toBe(userUpdatedData.gender);
   
})