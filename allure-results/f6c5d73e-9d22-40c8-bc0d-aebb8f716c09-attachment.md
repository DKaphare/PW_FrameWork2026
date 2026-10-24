# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.ts >> Verify Test Case - Valid and Invalid Cred Check >> Valid Credntials Login App
- Location: tests\LoginPageTest.spec.ts:23:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'gotoLoginPage')
```

# Test source

```ts
  1  | import{ test,expect} from "@playwright/test";
  2  | import { LoginPage } from '../src/pages/pages/LoginPage';
  3  | 
  4  | let LP :LoginPage;
  5  | 
  6  | 
  7  | test.beforeEach(async({page})=>{
> 8  |    await LP.gotoLoginPage();
     |             ^ TypeError: Cannot read properties of undefined (reading 'gotoLoginPage')
  9  | //    await LP.gotoLoginPage(process.env.U!,process.env.P!);
  10 | })
  11 | test.describe("Verify Test Case - Valid and Invalid Cred Check",()=>{
  12 | 
  13 | test('Title verify Test case',async({page})=>{
  14 |     LP=new LoginPage(page);
  15 |     // LP variable we have created nut not assigned the page
  16 |     await LP.gotoLoginPage();
  17 |    let TITLE=  await LP.getPageTitle();
  18 |    console.log(TITLE);
  19 |     expect(TITLE,'Account Login');
  20 |   
  21 | });
  22 | 
  23 | test('Valid Credntials Login App',async({page})=>{
  24 |     // MediaMetadata()
  25 |     await  LP.doLoginValid(process.env.U!,process.env.P!);
  26 | })
  27 | 
  28 | test('Invalid Credentials',async({page})=>{
  29 |     await LP.doLoginInvalid(process.env.U2!,process.env.P2!);
  30 | })
  31 | })
  32 | 
  33 | // 1:53
```