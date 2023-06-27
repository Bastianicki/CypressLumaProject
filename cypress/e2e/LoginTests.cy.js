import LoginPage from "../support/pages/customer-account/login/LoginPage";
import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import RandomData from '../support/test-data/RandomData';
import UserData from '../support/test-data/UserData';

const loginPage = new LoginPage();
const mainPageHeader = new MainPageHeader();

describe('Magento Shop Application', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    });

    it('should login to the application and verify user-specific features', () => {
        // Arrange: Click on the login link
        //cy.get('.header.links').contains('Sign In').click();
        mainPageHeader
            .clickOnSignInButton();

        // Act: Enter valid login credentials and submit the form
        loginPage
            .fillEmailFieldWithDefault()
            .fillPasswordFieldWithDefault()
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
            .fillEmailField(RandomData.generateRandomEmailAddress())
            .fillPasswordField(RandomData.generateRandomPassword(20))
            .clickOnSignInButton();

        // Assert:
        const expectedTitle = 'Customer Login';
        const expectedTextInElement = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.';

        cy.wait(3000);
        cy.title().should('equal', expectedTitle);
        loginPage.elements.alertAccountSignIncorrect().invoke('text').should('equal', expectedTextInElement);
    })
});