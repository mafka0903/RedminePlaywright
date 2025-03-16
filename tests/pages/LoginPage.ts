import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly username = () => this.page.locator('[name="username"]');
  readonly password = () => this.page.locator("#password");
  readonly submit = () => this.page.locator("#login-submit");
  readonly errorMessage = () => this.page.locator("#flash_error");

  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate("/login");
  }

  async login(username: string, password: string) {
    await this.username().fill(username);
    await this.password().fill(password);
  }

  async clickSubmit() {
    return await this.submit().click();
  }
}
