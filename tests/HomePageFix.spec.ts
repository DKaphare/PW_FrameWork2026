import{expect, test} from "../src/Fixtures/pageFixtures";

test.beforeEach(async({LP})=>{
   await LP.gotoLoginPage();
   await LP.doLoginValid(process.env.USERNAME!,process.env.PASSWORD!);
   
});
test('Verify logout link',async({HP})=>{
  expect(  await HP.logoutLinkPresent()).toBeTruthy();
});

test('headers info',async({HP})=>{
   let allHeaders=await HP.headersInfo();
   console.log("home page headers are",allHeaders);
   expect.soft(allHeaders).toHaveLength(4);
//    expect.soft(allHeaders).toEqual([
// 'My Account',
// 'My Orders',
// // 'My Affiliate Account',

//    ]
//    )
});