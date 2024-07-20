import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CadastroElementsTicket from '../elements/CadastroElementsTicket';
import BasePage from './BasePage';

export default class CadastroPageTicket extends BasePage {
  readonly cadastroElementsTicket: CadastroElementsTicket;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroElementsTicket = new CadastroElementsTicket(page);
  }

  async preencherFormularioTicket(
    email: string,
    message: string,
    signature: string
  ): Promise<void> {
    await this.cadastroElementsTicket
      .getFirstName()
      .type(faker.name.firstName());
    await this.cadastroElementsTicket.getLastName().type(faker.name.lastName());
    await this.cadastroElementsTicket.getEmail().type('jhon@gmail.com');
    await this.cadastroElementsTicket.getTicketQuantity().selectOption('2');
    await this.cadastroElementsTicket.getTypeV().check({ force: true });
    await this.cadastroElementsTicket.getFriend().check({ force: true });
    await this.cadastroElementsTicket.getTextReq().type(message);
    await this.cadastroElementsTicket.getCheckAgree().check();
    await this.cadastroElementsTicket.getAsssignature().type(signature);
    await this.cadastroElementsTicket.getConfirm().click();
  }
}
