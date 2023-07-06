import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import LoginPage from "../support/pages/customer-account/login/LoginPage";
import AccountPage from "../support/pages/customer-account/account-page/AccountPage";
import AccountPageElements from "../support/elements/AccountPageElements";

const mainPageHeader = new MainPageHeader();
const loginPage = new LoginPage();
const accountPage = new AccountPage();
const elementsOfAccountPage = new AccountPageElements();

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
            .fillEmailInputFieldWithDefault()
            .fillPasswordInputFieldWithDefault()
            .clickOnSignInButton();

        cy.wait(2000);

        mainPageHeader
            .clickOnActionButton()
            .selectSignOutOption();

        // Assert: 
        mainPageHeader.elements
            .createAnAccountButton()
            .should('be.visible');
    });

    it('should login, open account and verify whether sections are visible', () => {
        // Arrange:
        mainPageHeader
            .clickOnSignInButton();

        // Act
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

        // Act
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