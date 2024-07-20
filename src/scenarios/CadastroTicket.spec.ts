import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import CadastroPageTicket from '../support/pages/CadastroPageTicket';

test.describe('Cadastro de usuário do ticket', () => {
  let cadastroPage: CadastroPageTicket;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.url_ticket')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    cadastroPage = new CadastroPageTicket(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário de cadastro do site ticket', async () => {
    await cadastroPage.preencherFormularioTicket(
      'aab@blur.com.br',
      'teste01',
      'Hello'
    );
    /* await cadastroPage.validateTickettypeG(
      faker.name.firstName(),
      faker.name.lastName()
    );
    */
  });
});
