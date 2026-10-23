import{ test,expect} from "@playwright/test";
import { LoginPage } from '../src/pages/pages/LoginPage';
import { error } from "node:console";

let LP :LoginPage;

test.beforeEach(async({page})=>{
     LP=new LoginPage(page);
    await LP.gotoLoginPage();
//    await LP.gotoLoginPage(process.env.U!,process.env.P!);
})
test.describe("Verify Test Case - Valid and Invalid Cred Check",()=>{

test('Title verify Test case',async({page})=>{
    // LP variable we have created nut not assigned the page
    let TITLE=  await LP.getPageTitle();
    console.log(TITLE);
    expect(TITLE,'Account Login');
  
});

test('Valid Credntials Login App',async({page})=>{
    // MediaMetadata()
    await  LP.doLoginValid(process.env.U!,process.env.P!);
})

test('Invalid Credentials',async({page})=>{
    await LP.doLoginInvalid(process.env.U2!,process.env.P2!);
  let errorText=  await LP.loginErrorCheck();
    expect(error,'Warning: No match for E-Mail Address and/or Password.');
})
})

// 1:53