import RandomData from '../../../test-data/RandomData.js';

export default class CreateAccountPage {

    elements = {

    // Create New Customer Account
    // Personal Information
    firstNameField : () => cy.get("#firstname"),
    lastNameField : () => cy.get("#lastname"),
    signUpForNewsLetterCheckbox : () => cy.get("#is_subscribed"),

    // Sign-in Information
    emailField : () => cy.get("#email_address"),
    passwordField : () => cy.get("#password"),
    confirmPasswordField : () => cy.get("#password-confirmation"),
    createAnAccountButton : () => cy.get("button[title='Create an Account']"),

    // Messages
    messageError : () => cy.get(".message-error > div"),
    emailAddressError : () => cy.get("#email_address-error"),
    passwordConfirmationError : () => cy.get("#password-confirmation-error"),
    passwordError : () => cy.get("#password-error")

    }

    fillFirstNameField(firstName) {
        this.elements.firstNameField().type(firstName);
        return this;
    }

    fillFirstNameFieldWithRandom() {
        const randomFirstName = RandomData.generateRandomFirstName();
        return this.fillFirstNameField(randomFirstName);
    }

    fillLastNameField(lastName) {
        this.elements.lastNameField().type(lastName);
        return this;
    }

    fillLastNameFieldWithRandom() {
        const randomLastName = RandomData.generateRandomLastName();
        return this.fillLastNameField(randomLastName);
    }

    toggleSignUpForNewsLetterCheckbox(shouldClick) {
        if (shouldClick) {
            this.elements.signUpForNewsLetterCheckbox().click();
        }
        return this;
    }

    fillEmailField(email) {
        this.elements.emailField().type(email);
        return this;
    }

    fillEmailFieldWithRandom() {
        const randomEmailAddress = RandomData.generateRandomEmailAddress();
        return this.fillEmailField(randomEmailAddress);
    }

    fillFirstPasswordField(password) {
        this.elements.passwordField().type(password);
        return this;
    }

    fillSecondPasswordField(password) {
        this.elements.confirmPasswordField().type(password);
        return this;
    }

    fillBothPasswordFields(password) {
        this.elements.passwordField().type(password);
        this.elements.confirmPasswordField().type(password);
        return this;
    }

    fillBothPasswordFieldsWithRandom() {
        const randomPassword = RandomData.generateRandomPassword(20);
        return this.fillBothPasswordFields(randomPassword);
    }

    clickOnCreateAnAccountButton() {
        this.elements.createAnAccountButton().click();
        return this;
    }
}