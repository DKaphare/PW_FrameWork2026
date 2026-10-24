# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePageTest.spec.ts >> headers info
- Location: tests\HomePageTest.spec.ts:20:1

# Error details

```
Error: expect(received).toHaveLength(expected)

Expected length: 4
Received length: 0
Received array:  []
```

# Page snapshot

```yaml
- navigation [ref=f1e2]:
  - generic [ref=f1e3]:
    - button "$ Currency " [ref=f1e7] [cursor=pointer]:
      - strong [ref=f1e8]: $
      - text: Currency
      - generic [ref=f1e9]: 
    - list [ref=f1e11]:
      - listitem [ref=f1e12]:
        - link "" [ref=f1e13] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
        - text: "123456789"
      - listitem [ref=f1e15]:
        - link " My Account" [ref=f1e16] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - generic [ref=f1e17]: 
          - text: My Account
      - listitem [ref=f1e19]:
        - link " Wish List (0)" [ref=f1e20] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - generic [ref=f1e21]: 
          - text: Wish List (0)
      - listitem:
        - link "Shopping Cart":
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
```

# Test source

```ts
  1  | import{expect, test} from '@playwright/test';
  2  | import { HomePage } from "../src/pages/pages/HomePage"
  3  | import { LoginPage } from '../src/pages/pages/LoginPage';
  4  | 
  5  | let HP :HomePage;
  6  | let LP:LoginPage;
  7  | 
  8  | test.beforeEach(async({page})=>{
  9  |  LP=new LoginPage(page);
  10 |     await LP.gotoLoginPage();
  11 |     await LP.doLoginValid('sharuB@gmail.com','Bekind@1995');
  12 |     HP= new HomePage(page);
  13 | })
  14 | test('Verify logout link',async({page})=>{
  15 | 
  16 |    
  17 |   expect(  await HP.logoutLinkPresent()).toBeTruthy();
  18 | 
  19 | });
  20 | test('headers info',async({})=>{
  21 |    let allHeaders=await HP.headersInfo();
  22 |    console.log(allHeaders);
> 23 |    expect.soft(allHeaders).toHaveLength(4);
     |                            ^ Error: expect(received).toHaveLength(expected)
  24 | //    expect.soft(allHeaders).toEqual([
  25 | // 'My Account',
  26 | // 'My Orders',
  27 | // // 'My Affiliate Account',
  28 | 
  29 | //    ]
  30 | //    )
  31 | });
```