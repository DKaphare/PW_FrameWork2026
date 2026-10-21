import { Locator, Page } from "@playwright/test";
import { BasePage } from "./Basepage";

export class HomePage extends BasePage{
    //Locators
    private readonly LogoutLink:Locator;
    private readonly header:Locator;

    constructor(page:Page){
        super(page);
        this.LogoutLink=page.getByRole('link', { name: 'Logout' });
        this.header=page.getByRole('heading',{level:2});
    }

    async logoutLinkPresent(){
      return await this.LogoutLink.visible();
    }

    async headersInfo(){
      return await this.header.allInnerTexts();
    }
}
