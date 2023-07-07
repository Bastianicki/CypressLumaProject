import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import CreateAccountPage from "../support/pages/customer-account/create/CreateAccountPage";
import AccountPageElements from "../support/elements/AccountPageElements";
import CreateAccountPageElements from "../support/elements/CreateAccountPageElements";

import RandomData from '../support/test-data/RandomData';
import UserData from "../support/test-data/UserData";

const mainPageHeader = new MainPageHeader();
const createAccountPage = new CreateAccountPage();
const elementsOfAccountPage = new AccountPageElements();
const elementsOfCreateAccountPage = new CreateAccountPageElements();

describe('Magento Shop Application', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })

    it('Should successfully create an account', () => {

        // Arrange: 
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameInputField('FirstName')
            .fillLastNameInputField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailInputField(RandomData.generateRandomEmailAddress())
            .fillBothPasswordInputFields(RandomData.generateRandomPassword(10))
            .clickOnCreateAnAccountButton();

        // Assert:
        cy.wait(5000);

        const expectedTitle = 'My Account';
        cy.title().should('equal', expectedTitle);

        const expectedTextInElement = 'Thank you for registering with Main Website Store.';
        elementsOfAccountPage
            .getMessageSuccess()
            .invoke('text')
            .should('equal', expectedTextInElement);
    })

    it('Should not create an account as the email is already used', () => {

        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameInputField('FirstName')
            .fillLastNameInputField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailInputField(UserData.emailAddress)
            .fillBothPasswordInputFields(RandomData.generateRandomPassword(10))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.';
        elementsOfCreateAccountPage
            .getMessageError()
            .invoke('text')
            .should('equal', expectedTextInElement);
    })

    it('Should not create an account as the email is invalid', () => {

        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameInputField('FirstName')
            .fillLastNameInputField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailInputField("spg#gmail.com")
            .fillBothPasswordInputFields(RandomData.generateRandomPassword(10))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'Please enter a valid email address (Ex: johndoe@domain.com).';
        elementsOfCreateAccountPage
            .getEmailAddressError()
            .invoke('text')
            .should('equal', expectedTextInElement);
    })

    it('Should not create an account as the inputs in password field are not consistent', () => {

        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameInputField('FirstName')
            .fillLastNameInputField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailInputField("spg@gmail.com")
            .fillPasswordInputField(RandomData.generateRandomPassword(10))
            .fillConfirmPasswordInputField(RandomData.generateRandomPassword(10))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'Please enter the same value again.';
        elementsOfCreateAccountPage
            .getPasswordConfirmationError()
            .invoke('text')
            .should('equal', expectedTextInElement);
    })

    it('Should not create an account as input in the password field is not equal or greater than 8 symbols', () => {

        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameInputField('FirstName')
            .fillLastNameInputField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailInputField("spg@gmail.com")
            .fillBothPasswordInputFields(RandomData.generateRandomPassword(7))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.';
        elementsOfCreateAccountPage
            .getPasswordError()
            .invoke('text')
            .should('equal', expectedTextInElement);
    })

    it('Should not create an account as input in the password field does not contain different classes of characters in password', () => {

        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameInputField('FirstName')
            .fillLastNameInputField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailInputField("spg@gmail.com")
            .fillBothPasswordInputFields("12345678")
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.';
        elementsOfCreateAccountPage
            .getPasswordError()
            .invoke('text')
            .should('equal', expectedTextInElement);
    })
})