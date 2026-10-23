import{expect, test} from '../src/Fixtures/pageFixtures';
import { csvHelper } from '../src/utils/csvHelper';
import { excelHelper } from '../src/utils/excelHelper';
import { JSONHelper } from '../src/utils/JSONHelper';
// import { JSONHelper } from '../src/utils/JSONHelper';
import  * as allure  from "allure-js-commons";

test.beforeEach(async({LP})=>{
//    await LP.gotoLoginPage();
   await LP.gotoLoginPage();
  
})  
test('Title verify Test case',async({LP})=>{

    await allure.severity("Very Low");

    // LP variable we have created nut not assigned the page
    await LP.gotoLoginPage();
   
    let TITLE= await LP.getPageTitle();
    console.log(TITLE); 
    expect(TITLE,'Account Login');
  
});
//pros:
// light weight, easy to maintain/read, 3rd party lib, no license, flat files, fs, good for large set of test data
//DD_1: read csv data directly fromn the CSV file and loop the test method row wise...
let testCSVData=csvHelper.readCsv('src/testData/loginData.csv')
        for(let row of testCSVData )
    {
         //because of loop the same case will run 3 times and we cannot have same test name for 3 cases so getting error to avoid error will append the case
        test(`ICombination of Valid and nValid Credntials CSV Data -${row.username} - ${row.password}`,async({LP})=>
    {
         await LP.doLoginValid(row.username,row.password)
        // let LoginSuccessful=LP.getPageTitle();
       

        

        
       
        // expect(await LP.loginErrorCheck()).toBeTruthy();

});
    


//cons:
//1. maintenance -if excel got deleted  ,got corrupted easily
//2. MS Licenses- only license version will work
//DD_2: read xlsx data directly fromn the excel file and loop the test method row wise...
let testExcelData = excelHelper.readExcel('src/testData/eopnCartTestData.xlsx', 'Sheet1');
for (let row of testExcelData) {
    test(`login to app with invalid credentials with Excel Data - ${row.username} - ${row.password} `, async ({ LP, HP }) => {
        // meta({ priority: 'P2', severity: 'major', owner: 'Ajit', story: 'US103', epic: 'ep301', feature: 'F32', issue: 'bug36' });
        // await testData(testExcelData, 'Invalid Login Data');

        // await loginPage.doLogin(row.username, row.password);
        expect(await LP.loginErrorCheck()).toBeTruthy();
    });
}


//Pros:
//1. inbuilt method: parse, lightweight, smaller data source
//DD_3: read JSON data directly fromn the JSON file and loop the test method row wise...
// let testJSONData = JSONHelper.readJson('src/testData/loginData.json');
// for (let row of testJSONData) {
//     test(`login to app with invalid credentials with JSON Data - ${row.username} - ${row.password} `, async ({ loginPage, homePage }) => {
//         // meta({ priority: 'P 2', severity: 'major', owner: 'Ajit', story: 'US103', epic: 'ep301', feature: 'F32', issue: 'bug36' });
//         // await testData(testJSONData, 'Invalid Login Data');

//         await loginPage.doLogin(row.username, row.password);
//         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
//     });
// };
/**

let testJSONData = JSONHelper.readJson('src/testData/loginData.json');
for (let row of testJSONData) {
    test(`login to app with invalid credentials with JSON Data - ${row.username} - ${row.password} `, async ({ LP, HP }) => {
        // meta({ priority: 'P2', severity: 'major', owner: 'Ajit', story: 'US103', epic: 'ep301', feature: 'F32', issue: 'bug36' });
        // await testData(testJSONData, 'Invalid Login Data');

        await LP.doLoginValid(row.username, row.password);
        expect(await LP.loginErrorCheck()).toBeTruthy();

    });
}
     * 
 */