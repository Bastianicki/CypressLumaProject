export default class LoginPageElements {

    // Customer Login
    // Registered Customers
    getEmailInputField() {
        return cy.get('#email');
    }

    getPasswordInputField() {
        return cy.get('#pass');
    }

    getSignInButton() {
        return cy.get('button.action.login.primary');
    }

    // New Customers
    getCreateAnAccountButton() {
        return cy.get('a.action.create.primary');
    }

    // Messages
    getAlertAccountSignInIncorrect() {
        return cy.get('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
    }
}