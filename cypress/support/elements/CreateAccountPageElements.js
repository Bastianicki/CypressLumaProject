export default class CreateAccountPageElements {

    // Create New Customer Account
    // Personal Information
    getFirstNameInputField() {
        return cy.get('#firstname');
    }

    getLastNameInputField() {
        return cy.get('#lastname');
    }

    getSignUpForNewsLetterCheckbox() {
        return cy.get('#is_subscribed');
    }

    // Sign-in Information
    getEmailInputField() {
        return cy.get('#email_address');
    }

    getPasswordInputField() {
        return cy.get('#password');
    }

    getConfirmPasswordInputField() {
        return cy.get('#password-confirmation');
    }

    getCreateAnAccountButton() {
        return cy.get("button[title='Create an Account']");
    }

    // Messages
    getMessageError() {
        return cy.get('.message-error > div');
    }

    getEmailAddressError() {
        return cy.get('#email_address-error');
    }

    getPasswordConfirmationError() {
        return cy.get('#password-confirmation-error');
    }

    getPasswordError() {
        return cy.get('#password-error');
    }
}