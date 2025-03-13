import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { messages, testUsers, urls } from "../fixtures/data.fixture";
import { faker } from "@faker-js/faker";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

test("Verify login functionality with invalid password", async ({ page }) => {
  await loginPage.login(
    testUsers.UserFullData.userlogin,
    faker.internet.password()
  );
  await loginPage.clickSubmit();
  await expect(loginPage.errorMessage()).toBeVisible();
});

test("Verify login functionality with valid data", async ({ page }) => {
  await loginPage.login(
    testUsers.UserFullData.userlogin,
    testUsers.UserFullData.password
  );
  await loginPage.clickSubmit();
  await expect(page).toHaveURL(urls.myPage);
  await expect(page).toHaveTitle(messages.myPageTitle);
});
