# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.ts >> Valid Credntials Login App
- Location: tests\LoginPageTest.spec.ts:16:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'doLogin')
```

# Test source

```ts
  1  | import{expect, test} from '@playwright/test';
  2  | import { LoginPage } from '../src/pages/pages/LoginPage';
  3  | 
  4  | let LP :LoginPage;
  5  | 
  6  | test('Title verify Test case',async({page})=>{
  7  |     LP=new LoginPage(page);
  8  |     // LP variable we have created nut not assigned the page
  9  |     await LP.gotoLoginPage();
  10 |    let TITLE=  await LP.getPageTitle();
  11 |    console.log(TITLE);
  12 |     expect(TITLE,'Account Login');
  13 |   
  14 | });
  15 | 
  16 | test('Valid Credntials Login App',async({page})=>{
> 17 |     await  LP.doLogin(process.env.username!,process.env.pasword!);
     |               ^ TypeError: Cannot read properties of undefined (reading 'doLogin')
  18 | })
  19 | // 1:53
```