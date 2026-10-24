// intecept with mocking 
//mocking :fake data /response
import {test,expect} from "@playwright/test";

test('mock search JSON data api',async({page})=>{

    //JS Products
    let fakeProducts=[
        {name:'fake Mckbook 20 pro',price:'$799'},
        {name:'fake iphone 20',price:'$3000'},
    ];
//https://naveenautomationlabs.com/opencart/
    await page.route('**/index.php?route=product/search&search=macbook',async(route)=>{
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify(fakeProducts)
        });
    });

    await page.goto('https://abc.com//index.php?route=product/search&search=macbook');
    await page.pause();
});

test('mock search HTML data api',async({page})=>{


//https://naveenautomationlabs.com/opencart/
    await page.route('**/index.php?route=product/search&search=macbook',async(route)=>{
        await route.fulfill({
            status:200,
            contentType:'text/html',
           body: `
                <html>
                 body: 
                <html>
                <body>
                    <h1>Search Results</h1>
                    <div class="product-layout">
                        <h4><a href="#">Fake MacBook Pro</a></h4>
                        <p class="price">$599</p>
                    </div>
                    <div class="product-layout">
                        <h4><a href="#">Fake iPhone 20</a></h4>
                        <p class="price">$999</p>
                    </div>
                </body>
                </html>
            `,


        });
    });

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=macbook');

   // now assert on the fake HTML
    const heading = await page.textContent('h1');
    expect(heading).toBe('Search Results');

    const products = await page.locator('.product-layout h4').allTextContents();
    expect(products).toEqual(["Fake MacBook Pro", "Fake iPhone 20"]);

    const prices = await page.locator('.price').allTextContents();
    expect(prices).toEqual(["$599", "$999"]);

})