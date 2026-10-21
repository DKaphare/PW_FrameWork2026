//Obj->we create the object of each and every class to use it in script
// so to reduce this repxte the object of classes and the object reference of that class will use with destruct concept

import {test as baseTest} from '@playwright/test';
import {BasePage} from '../pages/Basepage';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';

type pageFixtures={
    BP: BasePage;
    LP: LoginPage;
    HP: HomePage;
}
// extend the playwright test :using baseTest.extend:inheritance
export let test=baseTest.extend<pageFixtures>({ 
//this export word is v imp 
//if we dont use this in HomePagefix will  get error

    BP:async({page},use)=>{
        //default export we have to write after the curly braces
        //use method coming from PW 
        let BP =new BasePage(page);//
        await use(BP);//deliver fixture to runner ,if not use wont destruct the BP
    },
    LP:async({page},use)=>{
        let LP =new LoginPage(page);
        await use(LP);
    },   
    HP:async({page},use)=>{
        let HP =new HomePage(page);
        await use(HP);
    },
});
export {expect} from "@playwright/test"
//here we have written  expect just becoz in framework if we need expect for assertion it will be easy to use
//why we give alias to test bcoz we are creatin our own framework so we are giving name as BaseTest (test) from
//which we can take pages,browser and in that we are adding loginpage,homepage and basepage  and their variable we can use furthur