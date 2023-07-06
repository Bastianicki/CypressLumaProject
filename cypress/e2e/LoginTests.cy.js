import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import LoginPage from "../support/pages/customer-account/login/LoginPage";
import LoginPageElements from "../support/elements/LoginPageElements";

import RandomData from '../support/test-data/RandomData';
import UserData from '../support/test-data/UserData';

const mainPageHeader = new MainPageHeader();
const loginPage = new LoginPage();
const elements = new LoginPageElements();

describe('Magento Shop Application', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    });

    it('should login to the application and verify user-specific features', () => {

        // Arrange: Click on the login link
        mainPageHeader
            .clickOnSignInButton();

        // Act: Enter valid login credentials and submit the form
        loginPage
            .fillEmailInputFieldWithDefault()
            .fillPasswordInputFieldWithDefault()
            .clickOnSignInButton();

        // Assert: Verify the title and welcome message
        const expectedTitle = 'Home Page';
        const expectedTextInElement = `Welcome, ${UserData.userName}!`;

        cy.wait(4000);
        cy.title().should('equal', expectedTitle);
        mainPageHeader.elements.welcomeMessage()
            .invoke('text')
            .should('equal', expectedTextInElement);
    });

    it('should not login to the application due to incorrect credentials', () => {

        // Arrange:
        mainPageHeader
            .clickOnSignInButton();

        // Act:
        loginPage
            .fillEmailInputField(RandomData.generateRandomEmailAddress())
            .fillPasswordInputField(RandomData.generateRandomPassword(20))
            .clickOnSignInButton();

        // Assert:
        const expectedTitle = 'Customer Login';
        const expectedTextInElement = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.';

        cy.wait(3000);
        cy.title().should('equal', expectedTitle);
        elements.getAlertAccountSignInIncorrect().invoke('text').should('equal', expectedTextInElement);
    })
});