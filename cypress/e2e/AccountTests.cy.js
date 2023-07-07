import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import LoginPage from "../support/pages/customer-account/login/LoginPage";
import AccountPage from "../support/pages/customer-account/account-page/AccountPage";
import AccountPageElements from "../support/elements/AccountPageElements";
import MainPageHeaderElements from "../support/elements/MainPageHeaderElements";

const mainPageHeader = new MainPageHeader();
const elementsOfMainPageHeader = new MainPageHeaderElements();
const loginPage = new LoginPage();
const accountPage = new AccountPage();
const elementsOfAccountPage = new AccountPageElements();

describe('Magento Shop Application', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })


    it('should login to the application and than sign out and verify whether button "Create an Account" is visible', () => {

        //Arrange:
        mainPageHeader
            .clickOnSignInButton();

        // Act:
        loginPage
            .fillEmailInputFieldWithDefault()
            .fillPasswordInputFieldWithDefault()
            .clickOnSignInButton();

        cy.wait(2000);

        mainPageHeader
            .clickOnActionButton()
            .selectSignOutOption();

        // Assert: 
        elementsOfMainPageHeader
            .getCreateAnAccountButton()
            .should('be.visible');
    });

    it('should login, open account and verify whether basic sections of account are visible', () => {

        // Arrange:
        mainPageHeader
            .clickOnSignInButton();

        // Act:
        loginPage
            .fillEmailInputFieldWithDefault()
            .fillPasswordInputFieldWithDefault()
            .clickOnSignInButton();

        cy.wait(2000);

        mainPageHeader
            .clickOnActionButton()
            .selectMyAccountOption();

        // Assert:
        elementsOfAccountPage.getContactInformationBox().should('be.visible');
        elementsOfAccountPage.getNewsletterBox().should('be.visible');
        elementsOfAccountPage.getDefaultBillingAddressBox().should('be.visible');
        elementsOfAccountPage.getDefaultShippingAddressBox().should('be.visible');
    });

    it('should login, open account and verify whether checkbox for newsletter is unchecked', () => {

        // Arrange:
        mainPageHeader
            .clickOnSignInButton();

        // Act:
        loginPage
            .fillEmailInputFieldWithDefault()
            .fillPasswordInputFieldWithDefault()
            .clickOnSignInButton();

        cy.wait(2000);

        mainPageHeader
            .clickOnActionButton()
            .selectMyAccountOption();

        accountPage
            .clickOnEditNewsletterSettingsButton();

        // Assert:
        elementsOfAccountPage
            .getGeneralSubscriptionCheckbox()
            .should('not.be.checked');
    });
})