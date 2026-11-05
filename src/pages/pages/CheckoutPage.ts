import{Locator,Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class CheckoutPage extends BasePage{

    private readonly checkoutIcon:Locator;

constructor(page:Page){
    super(page);
    this.checkoutIcon=page.getByText('Checkout',{exact:true}).first();
}

async checkOutFunctionality(){
  await this.checkoutIcon.click();
  return await this.page.title();
}
}