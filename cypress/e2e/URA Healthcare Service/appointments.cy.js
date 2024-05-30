import { HomePage } from "../pageObjects/home.page";
import { HistoryPage } from "../pageObjects/history.page";
import { LoginPage } from "../pageObjects/login.page";
import { MainMenuPage } from "../pageObjects/mainMenu.page";

describe("URA Healthcare Service", () => {
    context("Appointments", () => {
        beforeEach(() => {
            cy.visit('https://katalon-demo-cura.herokuapp.com/');
        });

        it('Make an appointment with specified details and validate them', () => {
            // i. Open the website
            //cy.visit('https://katalon-demo-cura.herokuapp.com/');

            // ii. Click "Make Appointment"
            HomePage.makeAppointmentButton.click();

            // iii. Get the demo account credentials from the HTML and save them into variables
            let username, password;
            LoginPage.usernameLabel.invoke('val').then((uname) => {
                username = uname;
            });
            LoginPage.passwordLabel.invoke('val').then((pwd) => {
                password = pwd;
            });

            // Ensure that the credentials are retrieved before proceeding
            cy.then(() => {
                // iv. Set username and password fields with the demo account credentials and login
                LoginPage.usernameInput.type(username);
                LoginPage.passwordInput.type(password);
                LoginPage.loginButton.click();

                // v. Set the following values
                // 1. Facility - Seoul CURA Healthcare Center
                MainMenuPage.facilityDropdown.select('Seoul CURA Healthcare Center');

                // 2. Check "Apply for hospital readmission"
                MainMenuPage.hospitalReadmissionCheckbox.check();

                // 3. Select "Medicaid"
                MainMenuPage.medicaidRadioButton.check();

                // 4. Set Date value by using the widget
                MainMenuPage.visitDateInput.click();
                MainMenuPage.datePickerDay.contains('30').click();

                // 5. Set comment
                MainMenuPage.commentInput.type('CURA Healthcare Service');

                // 6. Click "Book Appointment"
                MainMenuPage.bookAppointmentButton.click();

                // vi. Validate that previously set values are correct
                MainMenuPage.facilityText.should('have.text', 'Seoul CURA Healthcare Center');
                MainMenuPage.hospitalReadmissionText.should('have.text', 'Yes');
                MainMenuPage.programText.should('have.text', 'Medicaid');
                
                // Validate the visit date contains the day "30"
                MainMenuPage.visitDateText.should('include.text', '30');
                
                // Validate the comment
                MainMenuPage.commentText.should('have.text', 'CURA Healthcare Service');
            });
        });

        it('Validate that the appointment history is empty', () => {
            // ii. Click "Make Appointment"
            HomePage.makeAppointmentButton.click();

            // iii. Get the demo account credentials from the HTML and save them into variables
            let username, password;
            LoginPage.usernameLabel.invoke('val').then((uname) => {
                username = uname;
            });
            LoginPage.passwordLabel.invoke('val').then((pwd) => {
                password = pwd;
            });

            // Ensure that the credentials are retrieved before proceeding
            cy.then(() => {
                // iv. Set username and password fields with the demo account credentials and login
                LoginPage.usernameInput.type(username);
                LoginPage.passwordInput.type(password);
                LoginPage.loginButton.click();

                // v. Click the menu/stack/burger icon
                HomePage.sideMenuButton.click();

                // vi. Validate that the sidebar is active
                HomePage.sideMenuWrapper.should('have.class', 'active');

                // vii. Click "History"
                HomePage.sideMenuHistoryButton.click();

                // viii. Validate that "No appointment" is visible
                HistoryPage.body.should('contain.text', 'No appointment');
            });
        });

    });
});
