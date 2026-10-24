import {Locator, Page,test} from'@playwright/test';
export class BasePage
{
    protected readonly page:Page;

    //common locators across all page
    // protected   readonly logo:Locator;
    // protected readonly searchBox:Locator;
    // protected readonly searchIcon :Locator;
    // protected readonly footerLinks :Locator;
    // protected readonly currency :Locator;


    constructor (page:Page){
        this.page=page;
        // this.logo=page.getByRole('img', { name: 'naveenopencart' });

    }
}