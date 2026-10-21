import {Locator,Page} from '@playwright/test';
import { BasePage } from "./Basepage";

export class ProductInfoPage extends BasePage{
    private readonly productHeader;
    private readonly imagesCount;
    private readonly productMetaData;
    private readonly pricingData;
    private map:Map<string,string | number>;
    private readonly addToCartField;
    private readonly addToCartButton;

    constructor(page:Page){
        super(page);
        this.productHeader=page.getByRole('heading',{name:'MacBook Air'});
        this.imagesCount=page.locator('#content div li img');     
        this.productMetaData=page.locator('#content ul.list-unstyled:nth-of-type(1) li');
      
        this.pricingData=page.locator('div#content ul.list-unstyled:nth-of-type(2) li');
        let productInfoMap=this.map=new Map<string,string | number>();
        this.addToCartField=page.locator('#input-quantity');
        this.addToCartButton=page.getByRole('button', { name: 'Add to Cart' })
    }


    async productheader(){
      let productName=  await this.productHeader.innerText();
       console.log("Product Heaader is:",productName);
      return productName;
     
    }

    async imageCount(){
      let ImageCountNum=await this.imagesCount.first().waitFor({state:'visible'});
      return await this.imagesCount.count();
    }
//keeping getProductMainInfo and getProductPriceData private and calling this method into productAllInfo method
// here we are achieving encapsulation

/*async getProductMainInfo(){
        let MetaData=await this.productMetaData.allInnerTexts();
        for(let data of MetaData){
            //Brand:Apple
            let meta =data.split(':'); //after split data is getting in array
            let metaKey=meta[0].trim();
            let metaValue=meta[1].trim(); //trim for space removal

            return this.map.set(metaKey,metaValue);
        }
        // await this.pricingData.allInnerTexts();
    }
*/
 private  async getProductMetaData(): Promise<void> {
        let metaData = await this.productMetaData.allInnerTexts();
        for (let data of metaData) {
            let meta = data.split(':');	
            let metaKey = meta[0].trim();
            let metaValue = meta[1].trim();
         this.map.set(metaKey, metaValue);
        }
    }

  private  async getProductPriceData(): Promise<void> {
        let priceData = await this.pricingData.allInnerTexts();
        let productPrice = priceData[0].trim();
        let exTaxPrice = priceData[1].split(':')[1].trim();
        this.map.set('productprice', productPrice); 
        //here we are key is not availble for price so we have created our own price
        this.map.set('extaxprice', exTaxPrice);
        this.map.set(productPrice,exTaxPrice);    
}
    async productAllInfo():Promise<Map<string,string| number>>{
    //here we are wanted all the product info which is visible on page
    //and i wanted to put in my created map 

    this.map.set('productHead',await this.productheader());
    this.map.set('imageC',await this.imageCount());
    await this.getProductMetaData();
    await this.getProductPriceData();
    await this.addToCart();
    return this.map;
}
//add 1 quantity and click on ADD to cart
//we are keeping logic in this file because this functionality is present in product info page only
// after clicking on cart new page is getting open for that will create ShoopinCart.spec.ts

async addToCart(){
await this.addToCartField.fill('5');
await this.addToCartButton.click();
await this.page.pause();
}

}