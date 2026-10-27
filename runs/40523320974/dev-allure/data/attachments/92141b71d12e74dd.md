# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePageFix.spec.ts >> headers info
- Location: tests\HomePageFix.spec.ts:12:1

# Error details

```
Error: expect(received).toHaveLength(expected)

Expected length: 4
Received length: 0
Received array:  []
```

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 6
+ Received  + 1

- Array [
-   "My Account",
-   "My Orders",
-   "My Affiliate Account",
-   "Newsletter",
- ]
+ Array []
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
  1  | import{expect, test} from "../src/Fixtures/pageFixtures";
  2  | 
  3  | test.beforeEach(async({LP})=>{
  4  |    await LP.gotoLoginPage(); 
  5  |    await LP.doLogin(process.env.U!,process.env.P!);
  6  |    
  7  | });
  8  | test('Verify logout link',async({HP})=>{
  9  |   expect(  await HP.logoutLinkPresent()).toBeTruthy();
  10 | });
  11 | 
  12 | test('headers info',async({HP})=>{
  13 |    let allHeaders=await HP.headersInfo();
  14 |    console.log("home page headers are",allHeaders);
  15 |    expect.soft(allHeaders).toHaveLength(4);
> 16 | expect.soft(allHeaders).toEqual([
     |                         ^ Error: expect(received).toEqual(expected) // deep equality
  17 | 'My Account',
  18 | 'My Orders',
  19 | 'My Affiliate Account',
  20 | 'Newsletter'
  21 | ]  );
  22 | });
```