import{test as baseTest, expect} from "@playwright/test";
import { time } from "node:console";
import test from "node:test";

const TOKEN=process.env.API_TOKEN!;

let AUTH_Header={
    Authorization : `Bearer ${TOKEN}`
}

//Generic Method of createUser and alongwith that POST Method
async function createUser(AH:any){
let userData={
    name:'Riyu',
    email: `Riyu ${Date.now} ${time}@DP.com`,
    gender:'female',
    sttaus:'active'
};
    let REP=AH.post('/public/v2/users',userData,AUTH_Header);
    expect(REP.status).toBe(201);
    return REP.body;

}

//Test 1->Post->Get->
test('To create data and retireve the same',async({AH})=>{
    //post teh data
let Response=await createUser(AH);
 //get the data
 let Response1=await AH.get(`/public/v2/users ${Response.id}`,AUTH_Header);
 expect(Response1.status).toBe(200);
 expect(Response1.name).toBe(Response.name)
;
})