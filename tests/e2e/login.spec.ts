const { test, expect } = require('@playwright/test');

test("Tester la connexion", async (page)=>{
    await page.goto("http://localhost:3000");
    await page.getByLabel("Email").fill("test@test.com");
    await page.getByLabel("Password").fill("test123");
    await page.getByRole("button", { name: "Login" }).click();
    const message = await page.locator("#message") 
    await expect(message).toHaveText("Login successful");
})