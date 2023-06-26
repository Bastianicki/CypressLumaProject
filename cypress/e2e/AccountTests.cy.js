import AccountPage from "../support/pages/customer-account/account-page/AccountPage";
import CreateAccountPage from "../support/pages/customer-account/create/CreateAccountPage";
import LoginPage from "../support/pages/customer-account/login/LoginPage";
import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import RandomData from '../support/test-data/RandomData';
import UserData from "../support/test-data/UserData";

const loginPage = new LoginPage();
const mainPageHeader = new MainPageHeader();
const createAccountPage = new CreateAccountPage();
const accountPage = new AccountPage();

describe('Magento Shop Application', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })

    it('should login to the application and sign out', () => {
        //Arrange:
        mainPageHeader
            .clickOnSignInButton();

        // Act:
        loginPage
            .fillEmailFieldWithDefault()
            .fillPasswordFieldWithDefault()
            .clickOnSignInButton();

        cy.wait(2000);

        mainPageHeader
            .clickOnActionButton()
            .selectSignOutOption();

        // Assert: 
        cy.xpath(mainPageHeader.signInButton, mainPageHeader.createAnAccountButton).should('be.visible');
    });

    it('should login, open account and verify whether sections (account information and address book) are visible', () => {
        // Arrange:
        mainPageHeader
            .clickOnSignInButton();

        // Act
        loginPage
            .fillEmailFieldWithDefault()
            .fillPasswordFieldWithDefault()
            .clickOnSignInButton();

        cy.wait(2000);

        mainPageHeader
            .clickOnActionButton()
            .selectMyAccountOption();
        
        // Assert:
        cy.get(accountPage.contactInformatonBox).should('be.visible');
        cy.get(accountPage.newsletterBox).should('be.visible');
        cy.get(accountPage.defaultBillingAddressBox).should('be.visible');
        cy.get(accountPage.defaultShippingAddressBox).should('be.visible');
    });

    it('should login, open account and verify whether checkbox for newsletter is unchecked', () => {
        // Arrange:
        mainPageHeader
            .clickOnSignInButton();

        // Act
        loginPage
            .fillEmailFieldWithDefault()
            .fillPasswordFieldWithDefault()
            .clickOnSignInButton();

        cy.wait(2000);

        mainPageHeader
            .clickOnActionButton()
            .selectMyAccountOption();

        accountPage
            .clickOnEditNewsletterSettingsButton();
        
        // Assert:
        cy.get(accountPage.generalSubscriptionCheckbox).should('not.be.checked');

    });


})