import { BasePage } from "./base.page";

export class HistoryPage extends BasePage
{
    static get body()
    {
        return cy.get('body');
    }
}
