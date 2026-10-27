# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductInfoPage.spec.ts >> get product Infomration
- Location: tests\ProductInfoPage.spec.ts:11:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: Promise {}
Received: 4
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - button "$ Currency " [ref=f3e7] [cursor=pointer]:
        - strong [ref=f3e8]: $
        - text: Currency
        - generic [ref=f3e9]: 
      - list [ref=f3e11]:
        - listitem [ref=f3e12]:
          - link "" [ref=f3e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f3e15]:
          - link " My Account" [ref=f3e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=f3e17]: 
            - text: My Account
        - listitem [ref=f3e19]:
          - link " Wish List (0)" [ref=f3e20] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=f3e21]: 
            - text: Wish List (0)
        - listitem [ref=f3e22]:
          - link " Shopping Cart" [ref=f3e23] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=f3e24]: 
            - text: Shopping Cart
        - listitem [ref=f3e25]:
          - link " Checkout" [ref=f3e26] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=f3e27]: 
            - text: Checkout
  - banner [ref=f3e28]:
    - generic [ref=f3e30]:
      - link [ref=f3e33] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=f3e34]
      - generic [ref=f3e36]:
        - textbox "Search" [ref=f3e37]: Mac
        - button "" [ref=f3e39] [cursor=pointer]
      - generic [ref=f3e42]:
        - button " 7 item(s) - $6,206.00" [ref=f3e43] [cursor=pointer]:
          - generic [ref=f3e44]:
            - generic [ref=f3e45]: 
            - text: 7 item(s) - $6,206.00
        - text:    
  - navigation [ref=f3e47]:
    - generic: 
    - list [ref=f3e49]:
      - listitem [ref=f3e50]:
        - link "Desktops" [ref=f3e51] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=f3e52]:
        - link "Laptops & Notebooks" [ref=f3e53] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=f3e54]:
        - link "Components" [ref=f3e55] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=f3e56]:
        - link "Tablets" [ref=f3e57] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=f3e58]:
        - link "Software" [ref=f3e59] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=f3e60]:
        - link "Phones & PDAs" [ref=f3e61] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=f3e62]:
        - link "Cameras" [ref=f3e63] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=f3e64]:
        - link "MP3 Players" [ref=f3e65] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=f3e66]:
    - list [ref=f3e67]:
      - listitem [ref=f3e68]:
        - link "" [ref=f3e69] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
      - listitem [ref=f3e71]:
        - link "Search" [ref=f3e72] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=Mac
      - listitem [ref=f3e73]:
        - link "MacBook Air" [ref=f3e74] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/product&search=Mac&product_id=44
    - generic [ref=f3e75]:
      - text: "Success: You have added"
      - link "MacBook Air" [ref=f3e76] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=44
      - text: to your
      - link "shopping cart" [ref=f3e77] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
      - text: "!"
      - button "×" [ref=f3e78] [cursor=pointer]
    - generic [ref=f3e81]:
      - generic [ref=f3e82]:
        - list [ref=f3e83]:
          - listitem [ref=f3e84]:
            - link [ref=f3e85] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/image/cache/catalog/demo/macbook_air_1-500x500.jpg
              - img "MacBook Air" [ref=f3e86]
          - listitem [ref=f3e87]:
            - link [ref=f3e88] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/image/cache/catalog/demo/macbook_air_3-500x500.jpg
              - img "MacBook Air" [ref=f3e89]
          - listitem [ref=f3e90]:
            - link [ref=f3e91] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/image/cache/catalog/demo/macbook_air_2-500x500.jpg
              - img "MacBook Air" [ref=f3e92]
          - listitem [ref=f3e93]:
            - link [ref=f3e94] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/image/cache/catalog/demo/macbook_air_4-500x500.jpg
              - img "MacBook Air" [ref=f3e95]
        - list [ref=f3e96]:
          - listitem [ref=f3e97]:
            - link "Description" [ref=f3e98]:
              - /url: "#tab-description"
          - listitem [ref=f3e99]:
            - link "Reviews (0)" [ref=f3e100] [cursor=pointer]:
              - /url: "#tab-review"
        - generic [ref=f3e101]:
          - generic [ref=f3e102]: MacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don’t lose inches and pounds overnight. It’s the result of rethinking conventions. Of multiple wireless innovations. And of breakthrough design. With MacBook Air, mobile computing suddenly has a new standard.
          - text: "* * *"
      - generic [ref=f3e104]:
        - generic [ref=f3e105]:
          - button "" [ref=f3e106] [cursor=pointer]
          - button "" [ref=f3e108] [cursor=pointer]
        - heading "MacBook Air" [level=1] [ref=f3e110]
        - list [ref=f3e111]:
          - listitem [ref=f3e112]:
            - text: "Brand:"
            - link "Apple" [ref=f3e113] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer/info&manufacturer_id=8
          - listitem [ref=f3e114]: "Product Code: Product 17"
          - listitem [ref=f3e115]: "Reward Points: 700"
          - listitem [ref=f3e116]: "Availability: Out Of Stock"
        - list [ref=f3e117]:
          - listitem [ref=f3e118]:
            - heading "$1,202.00" [level=2] [ref=f3e119]
          - listitem [ref=f3e120]: "Ex Tax: $1,000.00"
        - generic [ref=f3e122]:
          - generic [ref=f3e123]: Qty
          - textbox "Qty" [ref=f3e124]: "5"
          - button "Add to Cart" [ref=f3e125] [cursor=pointer]
        - paragraph [ref=f3e127]:
          - generic [ref=f3e128]: 
          - generic [ref=f3e130]: 
          - generic [ref=f3e132]: 
          - generic [ref=f3e134]: 
          - generic [ref=f3e136]: 
          - link "0 reviews" [ref=f3e138] [cursor=pointer]:
            - /url: ""
          - text: /
          - link "Write a review" [ref=f3e139] [cursor=pointer]:
            - /url: ""
  - contentinfo [ref=f3e140]:
    - generic [ref=f3e141]:
      - generic [ref=f3e142]:
        - generic [ref=f3e143]:
          - heading "Information" [level=5] [ref=f3e144]
          - list [ref=f3e145]:
            - listitem [ref=f3e146]:
              - link "About Us" [ref=f3e147] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=f3e148]:
              - link "Delivery Information" [ref=f3e149] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=f3e150]:
              - link "Privacy Policy" [ref=f3e151] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=f3e152]:
              - link "Terms & Conditions" [ref=f3e153] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=f3e154]:
          - heading "Customer Service" [level=5] [ref=f3e155]
          - list [ref=f3e156]:
            - listitem [ref=f3e157]:
              - link "Contact Us" [ref=f3e158] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=f3e159]:
              - link "Returns" [ref=f3e160] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=f3e161]:
              - link "Site Map" [ref=f3e162] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=f3e163]:
          - heading "Extras" [level=5] [ref=f3e164]
          - list [ref=f3e165]:
            - listitem [ref=f3e166]:
              - link "Brands" [ref=f3e167] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=f3e168]:
              - link "Gift Certificates" [ref=f3e169] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=f3e170]:
              - link "Affiliate" [ref=f3e171] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=f3e172]:
              - link "Specials" [ref=f3e173] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=f3e174]:
          - heading "My Account" [level=5] [ref=f3e175]
          - list [ref=f3e176]:
            - listitem [ref=f3e177]:
              - link "My Account" [ref=f3e178] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=f3e179]:
              - link "Order History" [ref=f3e180] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=f3e181]:
              - link "Wish List" [ref=f3e182] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=f3e183]:
              - link "Newsletter" [ref=f3e184] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=f3e185]
      - paragraph [ref=f3e186]:
        - text: Powered By
        - link "OpenCart" [ref=f3e187] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1  | import{expect,test} from "../src/Fixtures/pageFixtures";
  2  | import { ProductInfoPage } from "../src/pages/pages/ProductInfoPage";
  3  | 
  4  | 
  5  | test.beforeEach(async({LP})=>{
  6  |     await LP.gotoLoginPage();
  7  |     await LP.doLogin(process.env.U!,process.env.P!);
  8  | });
  9  | 
  10 | 
  11 | test('get product Infomration',async({SP,PP,page})=>{
  12 |  await SP.getProductSearchResult(process.env.searchProductName!);
  13 |     await SP.selecttheProduct(process.env.selecttheProduct!);
  14 |     //indiviual method assertion
  15 |     expect(await PP.productheader()).toBe(process.env.selecttheProduct!);
  16 |     expect (await PP.imageCount()).toBe(4);
  17 | 
  18 |     //comibnation of header and imagecount in 1 method
  19 |   let actualProducInfoMap= await PP.productAllInfo();
  20 |   console.log("Actual Product Details",actualProducInfoMap);
  21 | //    let actualProductInfomap= PP.productAllInfo();
  22 | //    console.log(actualProductInfomap);
  23 | 
  24 | expect.soft(actualProducInfoMap.get('productHead')).toBe(process.env.selecttheProduct!);
> 25 | expect.soft(actualProducInfoMap.get('imageC')).toBe(PP.imageCount());
     |                                                ^ Error: expect(received).toBe(expected) // Object.is equality
  26 | expect.soft(actualProducInfoMap.get('Brand')).toBe('Apple');
  27 | // expect.soft(actualProducInfoMap.get('Reward Points')).toBe('700');
  28 | 
  29 | expect.soft(actualProducInfoMap.get('productprice')).toBe('$1,202.00');
  30 | expect.soft(actualProducInfoMap.get('extaxprice')).toBe('$1,000.00');
  31 | }); 
  32 | 
  33 | 
```