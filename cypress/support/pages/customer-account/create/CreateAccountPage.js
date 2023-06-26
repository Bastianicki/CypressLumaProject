import RandomData from '../../../test-data/RandomData.js';

export default class CreateAccountPage {
    firstNameField = "#firstname";
    lastNameField = "#lastname";
    signUpForNewsLetterCheckbox = "#is_subscribed";
    emailField = "#email_address";
    passwordField = "#password";
    confirmPasswordField = "#password-confirmation";
    createAnAccountButton = "button[title='Create an Account']";
    messageError = ".message-error > div";
    emailAdressError = "#email_address-error";
    passwordConfirmationError = "#password-confirmation-error";
    passwordError = "#password-error";


    fillFirstNameField(firstName) {
        cy.get(this.firstNameField).type(firstName);
        return this;
    }

    fillFirstNameFieldWithRandom() {
        const randomFirstName = RandomData.generateRandomFirstName();
        return this.fillFirstNameField(randomFirstName);
    }

    fillLastNameField(lastName) {
        cy.get(this.lastNameField).type(lastName);
        return this;
    }

    fillLastNameFieldWithRandom() {
        const randomLastName = RandomData.generateRandomLastName();
        return this.fillLastNameField(randomLastName);
    }

    toggleSignUpForNewsLetterCheckbox(shouldClick) {
        if (shouldClick) {
        cy.get(this.signUpForNewsLetterCheckbox).click();
        }
        return this;
    }

    fillEmailField(email) {
        cy.get(this.emailField).type(email);
        return this;
    }

    fillEmailFieldWithRandom() {
        const randomEmailAddress = RandomData.generateRandomEmailAddress();
        return this.fillEmailField(randomEmailAddress);
    }

    fillFirstPasswordField(password) {
        cy.get(this.passwordField).type(password);
        return this;
    }

    fillSecondPasswordField(password) {
        cy.get(this.confirmPasswordField).type(password);
        return this;
    }

    fillBothPasswordFields(password) {
        cy.get(this.passwordField).type(password);
        cy.get(this.confirmPasswordField).type(password);
        return this;
    }

    fillBothPasswordFieldsWithRandom() {
        const randomPassword = RandomData.generateRandomPassword(10);
        return this.fillBothPasswordFields(randomPassword);
    }

    clickOnCreateAnAccountButton() {
        cy.get(this.createAnAccountButton).click();
        return this;
    }
}
