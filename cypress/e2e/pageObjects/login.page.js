import { BasePage } from "./base.page";

export class LoginPage extends BasePage
{
    static get usernameLabel()
    {
        return cy.get('[aria-describedby="demo_username_label"]');
    }

    static get passwordLabel()
    {
        return cy.get('[aria-describedby="demo_password_label"]');
    }

    static get usernameInput()
    {
        return cy.get('#txt-username');
    }

    static get passwordInput()
    {
        return cy.get('#txt-password');
    }

    static get loginButton()
    {
        return cy.get('#btn-login');
    }
}
