import {test,expect} from '@playwright/test';

const UI_URL = "http://localhost:5174/";
test.beforeEach(async ({page})=>{
    await page.goto(UI_URL);
    await page.getByRole("link",{name:"Sign In"}).click();
    await expect(page.getByRole("heading",{name:"Sign In"})).toBeVisible();
    await page.locator("[name=email]").fill("maharsh@gmail.com")
    await page.locator("[name=password]").fill("password");
    await page.getByRole("button",{name:"Login"}).click();
    await expect(page.getByText("sign in successfully")).toBeVisible();
})

test("Should allow user to add a hotel",async ({page})=>{
    await page.goto(`${UI_URL}/add-hotel`);

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
    


})