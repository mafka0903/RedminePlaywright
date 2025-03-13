import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
  // Локатори
  readonly userLogin = () => this.page.locator("#user_login");
  readonly userPassword = () => this.page.locator("#user_password");
  readonly userPasswordConfirmation = () =>
    this.page.locator("#user_password_confirmation");
  readonly userFirstname = () => this.page.locator("#user_firstname");
  readonly userLastname = () => this.page.locator("#user_lastname");
  readonly userMail = () => this.page.locator("#user_mail");
  readonly errorMessage = () => this.page.locator("#errorExplanation");
  readonly commit = () => this.page.locator('[name="commit"]');

  constructor(page: Page) {
    super(page);
  }

  // Методи
  async navigate() {
    await super.navigate("/account/register");
  }

  async registrationEmptyField(
    userlogin: string,
    password: string,
    confirmation: string,
    firstname: string,
    lastname: string
  ) {
    await this.userLogin().fill(userlogin);
    await this.userPassword().fill(password);
    await this.userPasswordConfirmation().fill(confirmation);
    await this.userFirstname().fill(firstname);
    await this.userLastname().fill(lastname);
  }

  async registration(
    userlogin: string,
    password: string,
    confirmation: string,
    firstname: string,
    lastname: string,
    email: string
  ) {
    await this.registrationEmptyField(
      userlogin,
      password,
      confirmation,
      firstname,
      lastname
    );
    await this.userMail().fill(email);
  }

  async clickCommit() {
    return await this.commit().click();
  }

  async getErrorMessage() {
    return await this.errorMessage();
  }
}
