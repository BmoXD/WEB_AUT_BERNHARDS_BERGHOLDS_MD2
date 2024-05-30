import { BasePage } from "./base.page";

export class MainMenuPage extends BasePage
{
    static get facilityDropdown()
    {
        return cy.get('#combo_facility');
    }

    static get hospitalReadmissionCheckbox()
    {
        return cy.get('#chk_hospotal_readmission');
    }

    static get medicaidRadioButton()
    {
        return cy.get('#radio_program_medicaid');
    }

    static get visitDateInput()
    {
        return cy.get('#txt_visit_date');
    }

    static get datePickerDay()
    {
        return cy.get('.datepicker-days .day');
    }

    static get commentInput()
    {
        return cy.get('#txt_comment');
    }

    static get bookAppointmentButton()
    {
        return cy.get('#btn-book-appointment');
    }

    static get facilityText()
    {
        return cy.get('#facility');
    }

    static get hospitalReadmissionText()
    {
        return cy.get('#hospital_readmission').should('have.text', 'Yes');
    }

    static get programText()
    {
        return cy.get('#program');
    }

    static get visitDateText()
    {
        return cy.get('#visit_date');
    }

    static get commentText()
    {
        return cy.get('#comment');
    }
}
