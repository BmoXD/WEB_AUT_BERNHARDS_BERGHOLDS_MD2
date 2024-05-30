import { BasePage } from "./base.page";

export class HomePage extends BasePage
{
    static get url()
    {
        return "";
    }

    static get makeAppointmentButton()
    {
        return cy.get('#btn-make-appointment');
    }

    static get sideMenuButton()
    {
        return cy.get('#menu-toggle');
    }

    static get sideMenuWrapper()
    {
        return cy.get('#sidebar-wrapper');
    }

    static get sideMenuHistoryButton()
    {
        return cy.contains('a', 'History');
    }
}