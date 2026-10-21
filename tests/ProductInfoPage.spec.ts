import{expect,test} from "../src/pages/Fixtures/pageFixtures";
import { ProductInfoPage } from "../src/pages/pages/ProductInfoPage";


test.beforeEach(async({LP})=>{
    await LP.gotoLoginPage();
    await LP.doLogin(process.env.U1!,process.env.P1!);
});


test('get product Infomration',async({SP,PP,page})=>{
 await SP.getProductSearchResult(process.env.searchProductName!);
    await SP.selecttheProduct('MacBook Air');
    //indiviual method assertion
    expect(await PP.productheader()).toBe('MacBook Air');
    expect (await PP.imageCount()).toBe(4);

    //comibnation of header and imagecount in 1 method
  let actualProducInfoMap= await PP.productAllInfo();
  console.log("Actual Product Details",actualProducInfoMap);
//    let actualProductInfomap= PP.productAllInfo();
//    console.log(actualProductInfomap);

expect.soft(actualProducInfoMap.get('productHead')).toBe('MacBook Air');
expect.soft(actualProducInfoMap.get('imageC')).toBe(4);
expect.soft(actualProducInfoMap.get('Brand')).toBe('Apple');
// expect.soft(actualProducInfoMap.get('Reward Points')).toBe('700');

expect.soft(actualProducInfoMap.get('productprice')).toBe('$1,202.00');
expect.soft(actualProducInfoMap.get('extaxprice')).toBe('$1,000.00');
}); 

