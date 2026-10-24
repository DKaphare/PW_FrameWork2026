import {Locator,Page} from '@playwright/test';
import { BasePage } from "./Basepage";

export class SearchResultPage extends BasePage{
    private readonly searchResult:Locator;
    private readonly searchProductName:Locator;
    // private readonly resultantProduct:Locator;
    private readonly searchIcon;

    constructor(page:Page){
        super(page);
        this.searchProductName=page.getByRole('textbox', { name: 'Search' }).first();
        this.searchResult=page.locator('div.product-layout');
        this.searchIcon=page.locator('.input-group-btn');
       
    }
    //page action
    async getProductSearchResult(Name:string){
        await this.searchProductName.fill(Name);
        await this.searchIcon.click();
        let C= await this.searchResult.count();
        console.log("Count of SearchResults are:"+C);
    }
    async selecttheProduct(productName:String){
        await this.page.getByRole('link', { name : `${productName}`, exact: true }).first().click();
        // await this.page.getByRole('link', { name: 'iMac' })
       let ProductPage=await this.page.title();
       console.log(ProductPage);
    }
}