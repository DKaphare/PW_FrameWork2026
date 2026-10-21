import { Locator, Page } from "@playwright/test";
import{BasePage} from "../pages/Basepage";

export class LoginPage extends BasePage{

    //private Locators
        
    private readonly EmailId :Locator;
    private readonly password:Locator;
    private readonly Login:Locator;
    private readonly LoginError:Locator;

    //constructor of the page class:init the Locators
    constructor(page:Page){
        super(page);
        this.EmailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.Login=page.getByRole('button', { name: 'Login' });
        this.LoginError=page.locator('#account-login > div.alert.alert-danger:nth-of-type(1)')
    }

    //3.Public page actions(methods)/behaviour :
    async gotoLoginPage():Promise<void>
    {
        // await this.page.goto("opencart/index.php?route=account/login") ;
        await this.page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        //above provided partial url coz for other env the initial domain name will be different
       let URL= await this.page.url();
       
    }
    async getPageTitle(){
        await this.page.title(); //public mrthod calling private method called encapsulation 
        //e.g getPageTitle using title method
    }

    async doLoginValid(username:string,password:string){

        await this.EmailId.fill(username);
        await this.password.fill(password);
        await this.Login.click();

    }

    async doLoginInvalid(username:string,password:string){
        await this.EmailId.fill(username);
         await this.password.fill(password);
        await this.Login.click();

    }
    // async isInvalidError():Promise<boolean> {

    //   return await this.LoginError.visible();
    // }

    async loginErrorCheck(){
        await this.LoginError.isVisible();
    }
}