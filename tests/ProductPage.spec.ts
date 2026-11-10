import {expect,test} from  "../src/Fixtures/pageFixtures";

test.beforeEach(async({LP})=>{
    await LP.gotoLoginPage();
    await LP.doLogin(process.env.USERNAME1!,process.env.PASSWORD1!);
})

test('@smoke Product All Info',async({PP,SP,CC})=>{
    await SP.getProductSearchResult(process.env.searchProductName!);
    await SP.selecttheProduct(process.env.selecttheProduct!);
    await PP.getProductInfo();

//    let AddToCartMessage= await PP.addTocartandValidation();
//    expect(AddToCartMessage).toContain('Success: You have added ');
//    let cartTitle= await CC.checkOutFunctionality();
//     expect(cartTitle).toBe('Shopping Cart');
    
})

