import{ test,expect} from "@playwright/test";
import { LoginPage } from '../src/pages/pages/LoginPage';

let LP :LoginPage;


test.beforeEach(async({page})=>{
   await LP.gotoLoginPage();
//    await LP.gotoLoginPage(process.env.U!,process.env.P!);
})
test.describe("Valid and Invalid Cred Check",()=>{

    test('Title verify Test case',async({page})=>{
    LP=new LoginPage(page);
    // LP variable we have created nut not assigned the page
    await LP.gotoLoginPage();
   let TITLE=  await LP.getPageTitle();
   console.log(TITLE);
    expect(TITLE,'Account Login');
  
});

test('Valid Credntials Login App',async({page})=>{
    await  LP.doLoginValid(process.env.U!,process.env.P!);
})

test('Invalid Credentials',async({page})=>{
    await LP.doLoginInvalid(process.env.U2!,process.env.P2!);
})
})

// 1:53