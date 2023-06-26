import AccountPage from "../support/pages/customer-account/account-page/AccountPage";
import CreateAccountPage from "../support/pages/customer-account/create/CreateAccountPage";
import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import RandomData from '../support/test-data/RandomData';
import UserData from "../support/test-data/UserData";

const mainPageHeader = new MainPageHeader();
const createAccountPage = new CreateAccountPage();
const accountPage = new AccountPage();

describe('Magento Shop Application', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })

    it ('Should create an account', () =>{
        // Arrange: 
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameField('FirstName')
            .fillLastNameField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailField(RandomData.generateRandomEmailAddress())
            .fillBothPasswordFields(RandomData.generateRandomPassword(10))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTitle = 'My Account';
        const expectedTextInElement = 'Thank you for registering with Main Website Store.';

        cy.wait(5000);
        cy.title().should('equal', expectedTitle);
        cy.xpath(accountPage.messageSuccess).invoke('text').should('equal', expectedTextInElement);
    })

    it ('Should not create an account as the email is already used', () =>{
        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameField('FirstName')
            .fillLastNameField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailField(UserData.emailAddress)
            .fillBothPasswordFields(RandomData.generateRandomPassword(10))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.';
        cy.get(createAccountPage.messageError).invoke('text').should('equal', expectedTextInElement);
    })

    it ('Should not create an account as the email is invalid', () =>{
        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameField('FirstName')
            .fillLastNameField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailField("spg#gmail.com")
            .fillBothPasswordFields(RandomData.generateRandomPassword(10))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'Please enter a valid email address (Ex: johndoe@domain.com).';
        cy.get(createAccountPage.emailAdressError).invoke('text').should('equal', expectedTextInElement);
    })

    it ('Should not create an account as the inputs in password field are not consistent', () =>{
        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameField('FirstName')
            .fillLastNameField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailField("spg@gmail.com")
            .fillFirstPasswordField(RandomData.generateRandomPassword(10))
            .fillSecondPasswordField(RandomData.generateRandomPassword(10))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'Please enter the same value again.';
        cy.get(createAccountPage.passwordConfirmationError).invoke('text').should('equal', expectedTextInElement);
    })

    it ('Should not create an account as input in the password field is not equal or greater than 8 symbols', () =>{
        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameField('FirstName')
            .fillLastNameField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailField("spg@gmail.com")
            .fillBothPasswordFields(RandomData.generateRandomPassword(7))
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.';
        cy.get(createAccountPage.passwordError).invoke('text').should('equal', expectedTextInElement);
    })

    it ('Should not create an account as input in the password field does not contain different classes of characters in password', () =>{
        // Arrange:
        mainPageHeader
            .clickOnCreateAnAccountButton();

        // Act:
        createAccountPage
            .fillFirstNameField('FirstName')
            .fillLastNameField('LastName')
            .toggleSignUpForNewsLetterCheckbox(true)
            .fillEmailField("spg@gmail.com")
            .fillBothPasswordFields("12345678")
            .clickOnCreateAnAccountButton();

        // Assert:
        const expectedTextInElement = 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.';
        cy.get(createAccountPage.passwordError).invoke('text').should('equal', expectedTextInElement);
    })

})