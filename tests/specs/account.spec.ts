import { test, expect } from "@playwright/test";
import { AccountPage } from "../pages/AccountPage";
import { LoginPage } from "../pages/LoginPage";
import { testUsers, messages } from "../fixtures/data.fixture";

let accountPage: AccountPage;

test.beforeEach(async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.navigate();

  await loginPage.login(
    testUsers.UserFullData.userlogin,
    testUsers.UserFullData.password
  );
  await loginPage.clickSubmit();

  accountPage = new AccountPage(page);
  await accountPage.navigate();
});

test("Verify that the user can change their credentials", async () => {
  await accountPage.userLastnameAccount().fill("Вишнівська");
  await accountPage.saveButton().click();
  await expect(accountPage.messageSuccess()).toBeVisible();
  await expect(accountPage.messageSuccess()).toContainText(
    messages.successfulUpdate
  );
});
