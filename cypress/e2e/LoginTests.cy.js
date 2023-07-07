import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import MainPageHeaderElements from "../support/elements/MainPageHeaderElements";
import LoginPage from "../support/pages/customer-account/login/LoginPage";
import LoginPageElements from "../support/elements/LoginPageElements";

import RandomData from '../support/test-data/RandomData';
import UserData from '../support/test-data/UserData';

const mainPageHeader = new MainPageHeader();
const loginPage = new LoginPage();
const elementsOfLoginPage = new LoginPageElements();
const elementsOfMainPageHeader = new MainPageHeaderElements();

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
        cy.wait(4000);

        const expectedTitle = 'Home Page';
        cy.title().should('equal', expectedTitle);

        const expectedTextInElement = `Welcome, ${UserData.userName}!`;
        elementsOfMainPageHeader
            .getWelcomeMessage()
            .invoke('text')
            .should('equal', expectedTextInElement);
    });

    it('should not login to the application due to incorrect credentials', () => {

        // Arrange: Click on the login link
        mainPageHeader
            .clickOnSignInButton();

        // Act: Enter invalid login credentials and submit the form
        loginPage
            .fillEmailInputField(RandomData.generateRandomEmailAddress())
            .fillPasswordInputField(RandomData.generateRandomPassword(20))
            .clickOnSignInButton();

        // Assert: Verify the title and error message
        cy.wait(3000);

        const expectedTitle = 'Customer Login';
        cy.title().should('equal', expectedTitle);

        const expectedTextInElement = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.';
        elementsOfLoginPage
            .getAlertAccountSignInIncorrect()
            .invoke('text')
            .should('equal', expectedTextInElement);
    })
});