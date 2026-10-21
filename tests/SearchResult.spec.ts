
import{expect, test} from "../src/Fixtures/pageFixtures";
import { csvHelper } from '../src/utils/csvHelper';

test.beforeEach(async({LP})=>{
    await LP.gotoLoginPage();
    await LP.doLoginValid(process.env.U1!,process.env.P1!);
});

test('Flow of Search Functionality',async({SP})=>{
   let resultCount= await SP.getProductSearchResult(process.env.searchProductName!);
    // expect(resultCount.toBe(4));
    // await SP.selecttheProduct();
});

let searchCSV=csvHelper.readCsv('src/testData/searchData.csv')
for(let row of searchCSV){
test(`Verify user is able to land on the Home Page- ${row.searchproductName},${row.selectProduct},${row.AssertionProduct}`,async({HP,SP,page})=>{
    // await SP.getProductSearchResult(process.env.searchProductName!);->coming from config- env.dev
    await SP.getProductSearchResult(row.searchproductName);
    await SP.selecttheProduct(row.selectProduct);
    expect(page.title()).toBe(row.AssertionProduct);
    await page.pause();

});
};