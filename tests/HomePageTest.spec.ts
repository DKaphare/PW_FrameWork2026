import{expect, test} from '@playwright/test';
import { HomePage } from "../src/pages/pages/HomePage"
import { LoginPage } from '../src/pages/pages/LoginPage';

let HP :HomePage;
let LP:LoginPage;

test.beforeEach(async({page})=>{
 LP=new LoginPage(page);
    await LP.gotoLoginPage();
    await LP.doLoginValid('sharuB@gmail.com','Bekind@1995');
    HP= new HomePage(page);
})
test('Verify logout link',async({page})=>{

   
  expect(  await HP.logoutLinkPresent()).toBeTruthy();

});
test('headers info',async({})=>{
   let allHeaders=await HP.headersInfo();
   console.log(allHeaders);
   expect.soft(allHeaders).toHaveLength(4);
//    expect.soft(allHeaders).toEqual([
// 'My Account',
// 'My Orders',
// // 'My Affiliate Account',

//    ]
//    )
});