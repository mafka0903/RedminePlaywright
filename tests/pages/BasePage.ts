import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string) {
    await this.page.goto(`https://www.redmine.org/${path}`);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState("networkidle");
  }
}
