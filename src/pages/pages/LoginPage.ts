import { Locator, Page } from "@playwright/test";
import{BasePage} from "../pages/Basepage";

export class LoginPage extends BasePage{

    //private Locators
        
    private readonly EmailId :Locator;
    private readonly password:Locator;
    private readonly Login:Locator;
    private readonly LoginError:Locator;
    private readonly logout :Locator;
    private readonly LoginSuccMessage :Locator;

    //constructor of the page class:init the Locators
    constructor(page:Page){
        super(page);
        this.EmailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.Login=page.getByRole('button', { name: 'Login' });
        this.LoginError=page.locator('.alert.alert-danger.alert-dismissible');
        this.logout=page.getByRole('link', { name: 'Logout' });
        this.LoginSuccMessage=page.getByRole('link', { name: 'Edit your account information' });
    }

    //3.Public page actions(methods)/behaviour :
    async gotoLoginPage():Promise<void>
    {
        // await this.page.goto("opencart/index.php?route=account/login") ;
        //https://naveenautomationlabs.com/
        await this.page.goto("opencart/index.php?route=account/login");
        //above provided partial url coz for other env the initial domain name will be different
       let URL= await this.page.url();
       console.log(URL);
       
    }
    async getPageTitle(){
       return await this.page.title(); //public mrthod calling private method called encapsulation 
        //e.g getPageTitle using title method
    }

    async doLogin(username:string,password:string){

        await this.EmailId.fill(username);
        await this.password.fill(password);
        await this.Login.click();
       

    }

   
    // async isInvalidError():Promise<boolean> {

    //   return await this.LoginError.visible();
    // }
    async loginSuccessful(){
      return  await this.LoginSuccMessage.isVisible();
    }
    async loginErrorCheck(){
        // let errorText=await this.LoginError.innerText();
        // console.log("Error Text is ",errorText);
        await this.LoginError.isVisible();
    }

    async logoutCheckClick(){
        await this.logout.click();

    }
    
    async logoutCheckVisible(){
       return await this.logout.visible();

    }
}