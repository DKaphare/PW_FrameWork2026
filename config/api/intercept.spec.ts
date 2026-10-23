//Interception means->Intercept the network calls and logs 
import {test,expect} from "@playwright/test";
test('intercept and log response',async({page})=>{

    page.route('**/*',async(route)=>{
        console.log(route.request().method(),route.request().url());
        await route.continue();
    });
    await page.goto("https://naveenautomationlabs.com/opencart/");
})