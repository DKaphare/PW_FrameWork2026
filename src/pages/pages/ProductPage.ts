import { Locator,Page } from "@playwright/test";
import {BasePage} from "./BasePage";

export class ProductPage extends BasePage{

 private readonly Header:Locator;
 private readonly productImage:Locator;
 private readonly productMetaData:Locator;
 private readonly productPricingInfo:Locator;
 private readonly productInfoMap:Map<string,string|number>;
 private readonly addToCart:Locator;
 private readonly addToCartMessage:Locator;

constructor(page:Page){
    super(page);

    this.Header=page.getByRole('heading',{level:1});
    this.productImage= page.locator('a.thumbnail img');
    this.productMetaData=page.locator('div#content ul.list-unstyled:nth-of-type(1) li');
    this.productPricingInfo=page.locator('div#content ul.list-unstyled:nth-of-type(2) li');
    this.productInfoMap=new Map<string,string|number>();
    this.addToCart=page.getByRole('button', { name: 'Add to Cart' }).first();
    this.addToCartMessage=page.locator('.alert.alert-success.alert-dismissible');
}
async getProductHeader(){
    await this.Header.waitFor({state:'visible'});
    return await this.Header.innerText();
}
async getImageCount(){
   let ImgCount= await this.productImage.count();
   console.log("Image count is",ImgCount);
   return ImgCount;
}

private async getProductMetaData(){
 let metadata=   await this.productMetaData.allInnerTexts();
 for(let data of metadata ){
    let meta=data.split(':');
    let metakey=meta[0].trim();
    let metaValue=meta[1].trim();
    this.productInfoMap.set(metakey,metaValue);
    console.log(this.productInfoMap);
 }
}

private async getProductPriceData(){
let productPrice=await this.productPricingInfo.allInnerTexts();
let priceData=productPrice[0].trim();
let exPrice=productPrice[1].split(':')[1].trim();
this.productInfoMap.set(priceData,exPrice);
}
async addTocartandValidation(){
  await this.addToCart.click(); 
 return await this.addToCartMessage.innerText();
 
}

async getProductInfo(){
    this.productInfoMap.set('productHeader' , await this.getProductHeader());
    this.productInfoMap.set('productImageCount',await this.getImageCount());
    this.getProductMetaData();
    this.getImageCount();
  
}


}
/*
  // Brand: Apple
    // Product Code: Product 18
    // Reward Points: 800
    // Availability: Out Of Stock


    // $2,000.00
    // Ex Tax: $2,000.00
    */
