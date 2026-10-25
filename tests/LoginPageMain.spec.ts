import {test, expect} from "../src/Fixtures/pageFixtures";
import { csvHelper } from "../src/utils/csvHelper";
import { excelHelper } from "../src/utils/excelHelper";
import { JSONHelper } from "../src/utils/JSONHelper";

test.beforeEach(async({LP})=>{
    await LP.gotoLoginPage();
   //  await LP.doLoginValid(process.env.U!,process.env.P!);
})

//pros:
// light weight, easy to maintain/read, 3rd party lib, no license, flat files, fs, good for large set of test data
//DD_1: read csv data directly fromn the CSV file and loop the test method row wise...
let testCSVData=csvHelper.readCsv('src/testData/loginData.csv')
for (let row of testCSVData)
{
   test(`@smoke Login in the app with  -CSV data ${row.username} - ${row.password}`,async({LP})=>
   {

      await LP.doLogin(row.username,row.password);
      expect(await LP.loginSuccessful);
   });
}
//cons:
//1. maintenance -if excel got deleted  ,got corrupted easily
//2. MS Licenses- only license version will work
//DD_2: read xlsx data directly fromn the excel file and loop the test method row wise...
let testExcelData=excelHelper.readExcel('src/testData/eopnCartTestData.xlsx','Sheet1');
for(let row of testExcelData){
   test('@regression Login in the app with Excel Data',async({LP})=>{
      expect(await LP.loginSuccessful);
   })
}

//Pros:
//1. inbuilt method: parse, lightweight, smaller data source
//DD_3: read JSON data directly fromn the JSON file and loop the test method row wise...
let testJsonData=JSONHelper.readJson('src/testData/loginData.json');
for(let row of testJsonData){
   test('@smoke Login to app with JSON Data',async({LP})=>{
      expect(await LP.loginSuccessful);
   })
}

// test('Title verify Test case',async({LP})=>{
//     // await allure.severity("Very Low");
//     // LP variable we have created nut not assigned the page
//     // await LP.gotoLoginPage();
//     let TITLE= await LP.getPageTitle();
//     console.log(TITLE); 
//     expect(TITLE,'Account Login');
  
// });