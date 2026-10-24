import { test as baseTest } from '@playwright/test';
import { BasePage } from '../pages/pages/Basepage';
import { LoginPage } from '../pages/pages/LoginPage';
import { HomePage } from '../pages/pages/HomePage';
import{SearchResultPage} from '../pages/pages/SearchResultPage';
import { ProductInfoPage } from '../pages/pages/ProductInfoPage';
// import { CsvHelper } from '../utils/CsvHelper';

 type pageFixtures = {
    BP: BasePage,
    LP: LoginPage,
    HP: HomePage,
    SP: SearchResultPage,
    PP: ProductInfoPage,
    // testData: Record<string, string>[];
};

//extend the playright test: using baseTest.extend: inheritance
export let test = baseTest.extend<pageFixtures>({
//this export word is v imp 
//if we dont use this in HomePagefix will  get error
    BP: async ({ page }, use) => {//use deconstruct differently because its default so not written with page
        //default export we have to write after the curly braces
        //use method coming from PW 
        let BP = new BasePage (page);
        await use(BP);
        //deliver fixture to runner ,if not use wont destruct the BP
    },

    LP: async ({ page }, use) => {
        let LP = new LoginPage(page);
        await use(LP);
    },
    HP: async ({ page }, use) => {
        let HP = new HomePage(page);
        await use(HP);
    },
    SP: async({page},use)=>{
        let SP=new SearchResultPage(page);
        await use(SP);
    },
    PP:async({page},use)=>{
        let PP= new ProductInfoPage(page);
        await use(PP);

    }

    // searchResultsPage: async ({ page }, use) => {
    //     let searchResultsPage = new SearchResultsPage(page);
    //     await use(searchResultsPage);
    // },

    // productInfoPage: async ({ page }, use) => {
    //     let productInfoPage = new ProductInfoPage(page);
    //     await use(productInfoPage);
    // },

    // testData: async ({ }, use) => {
    //     let testCSVData = CsvHelper.readCsv('src/testdata/logindata.csv');
    //     await use(testCSVData);
    // }


});

export { expect } from '@playwright/test';


//here we have written  expect just becoz in framework if we need expect for assertion it will be easy to use
//why we give alias to test bcoz we are creatin our own framework so we are giving name as BaseTest (test) from
//which we can take pages,browser and in that we are adding loginpage,homepage and basepage  and their variable we can use furthur
