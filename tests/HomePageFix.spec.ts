import{expect, test} from "../src/Fixtures/pageFixtures";

test.beforeEach(async({LP})=>{
   await LP.gotoLoginPage(); 
   await LP.doLogin(process.env.U!,process.env.P!);
   
});
test('@smoke Verify logout link',async({HP})=>{
  expect(  await HP.logoutLinkPresent()).toBeTruthy();
});

test('@smoke headers info',async({HP})=>{
   let allHeaders=await HP.headersInfo();
   console.log("home page headers are",allHeaders);
   expect.soft(allHeaders).toHaveLength(4);

});