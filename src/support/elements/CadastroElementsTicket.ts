import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElementsTicket extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getFirstName(): Locator {
    return this.page.locator('#first-name');
  }

  getLastName(): Locator {
    return this.page.locator('#last-name');
  }

  getEmail(): Locator {
    return this.page.locator('#email');
  }

  getTicketQuantity(): Locator {
    return this.page.locator('#ticket-quantity');
  }

  getTypeG(): Locator {
    return this.page.locator('#general');
  }

  getTypeV(): Locator {
    return this.page.locator('input[value="vip"]');
  }

  getFriend(): Locator {
    return this.page.locator('#friend');
  }

  getPublication(): Locator {
    return this.page.locator('#publication');
  }

  getSocialM(): Locator {
    return this.page.locator('#social-media');
  }

  getTextReq(): Locator {
    return this.page.locator('#requests');
  }

  getMessagePurchase(): Locator {
    return this.page.locator(
      'text=I, , wish to buy 1 VIP ticket. I understand that all ticket sales are final.'
    );
  }

  getCheckAgree(): Locator {
    return this.page.locator('#agree');
  }

  getAsssignature(): Locator {
    return this.page.locator('#signature');
  }

  getConfirm(): Locator {
    return this.page.locator('button[type="submit"]');
  }
}
