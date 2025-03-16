import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountPage extends BasePage {
  readonly userLastnameAccount = () => this.page.locator("#user_lastname");
  readonly saveButton = () =>
    this.page.locator('p.mobile-hide [name="commit"]');
  readonly messageSuccess = () => this.page.locator("#flash_notice");

  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate("/my/account");
  }
}
