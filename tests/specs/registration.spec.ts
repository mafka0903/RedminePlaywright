import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pages/RegisterPage";
import { testUsers, messages } from "../fixtures/data.fixture";

let registerPage: RegisterPage;

test.beforeEach(async ({ page }) => {
  registerPage = new RegisterPage(page);
  await registerPage.navigate();
});

test("Attempted registration with empty fields", async () => {
  await registerPage.registrationEmptyField(
    testUsers.UserWithoutEmail.userlogin,
    testUsers.UserWithoutEmail.password,
    testUsers.UserWithoutEmail.confirmation,
    testUsers.UserWithoutEmail.firstname,
    testUsers.UserWithoutEmail.lastname
  );
  await registerPage.clickCommit();
  await expect(registerPage.errorMessage()).toBeVisible();
});

test("Verify that user cannot register with the same data again", async () => {
  await registerPage.registration(
    testUsers.UserFullData.userlogin,
    testUsers.UserFullData.password,
    testUsers.UserFullData.confirmation,
    testUsers.UserFullData.firstname,
    testUsers.UserFullData.lastname,
    testUsers.UserFullData.email
  );
  await registerPage.clickCommit();
  await expect(registerPage.errorMessage()).toContainText(
    messages.EmailHasAlready
  );
});
