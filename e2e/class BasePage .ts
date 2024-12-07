import { Page } from "@playwright/test";
import { test, expect } from '@playwright/test';

class BasePage {
        page: Page;
        url: string
    constructor(page:Page,url: string) {
        this.page =page
        this.url = url    
    }
  
    async goToUrl() {
      await this.page.goto(this.url);
    }
    async checkTitle(title:string) {
      await expect(this.page).toHaveTitle(new RegExp(title, 'i'));
    }
  
  }
  export default BasePage;
