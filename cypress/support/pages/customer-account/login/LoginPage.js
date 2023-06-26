import UserData from '../../../test-data/UserData.js';

export default class LoginPage {

    emailField = "#email";
    passwordField = "#pass";
    signInButton = "button.action.login.primary";
    createAnAccountButton = "a.action.create.primary";
    alertAccountSignIncorrect = "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']";

    fillEmailField(email) {
        cy.get(this.emailField).type(email);
        return this;
    }

    fillEmailFieldWithDefault() {
        return this.fillEmailField(UserData.emailAddress);
    }

    fillPasswordField(password) {
        cy.get(this.passwordField).type(password);
        return this;
    }

    fillPasswordFieldWithDefault() {
        return this.fillPasswordField(UserData.password);
    }

    clickOnSignInButton() {
        cy.get(this.signInButton).click();
        return this;
    }

    clickOnCreateAnAccountButton() {
        cy.get(this.createAnAccountButton).click();
        return this;
    }
}
