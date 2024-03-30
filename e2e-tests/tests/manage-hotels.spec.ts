import {test,expect} from '@playwright/test';
import path from 'path';

const UI_URL = "http://localhost:5174/";
test.beforeEach(async ({page})=>{
    await page.goto(`${UI_URL}add-hotel`);
    await page.getByRole("link",{name:"Sign In"}).click();
    await expect(page.getByRole("heading",{name:"Sign In"})).toBeVisible();
    await page.locator("[name=email]").fill("maharsh@gmail.com")
    await page.locator("[name=password]").fill("password");
    await page.getByRole("button",{name:"Login"}).click();
    await expect(page.getByText("sign in successfully")).toBeVisible();
})

test("Should allow user to add a hotel",async ({page})=>{
    await page.goto(`${UI_URL}add-hotel`);

    await page.locator('[name="name"]').fill("Test Hotel");
    await page.locator('[name="city"]').fill("Test city");
    await page.locator('[name="country"]').fill("Test Country");
    await page.locator('[name="description"]').fill("This is a description for the Test Hotel");
    await page.locator('[name="pricePerNight"]').fill("100");
    await page.selectOption('select[name="startRating"]',"3");
    await page.getByText("Budget");
    await page.getByLabel("Free Wifi").check();
    await page.getByLabel("Parking").check();
    await page.locator('[name="adultCount"]').fill("2");
    await page.locator('[name="childCount"]').fill("4");

    await page.setInputFiles('[name="imageFiles"]',[
        path.join(__dirname,"files","1.png"),
        path.join(__dirname,"files","2.png"),
    ]);

    await page.getByRole("button",{name:"Save"}).click();
    await expect(page.getByText("Hotel saved!")).toBeVisible();

})

test("should display hotel", async({page})=>{
     await page.goto(`${UI_URL}my-hotels`);
     await expect(page.getByText("Dublic GateWays")).toBeVisible();
     await expect(page.locator(':has-text("Lorem ipsum dolor sit amet")')).toBeVisible();
     await expect(page.getByText("Dublin, Ireland")).toBeVisible();
     await expect(page.getByText("All Inclusive")).toBeVisible();
     await expect(page.getByText("10000 per night")).toBeVisible();
     await expect(page.getByText("2 adults , 3 children")).toBeVisible();
     await expect(page.getByText("2 Star Rating")).toBeVisible();
    await expect(page.getByRole("link",{name:"view Details"})).toBeVisible();
    await expect(page.getByRole("link",{name:"Add Hotel"})).toBeVisible();
})