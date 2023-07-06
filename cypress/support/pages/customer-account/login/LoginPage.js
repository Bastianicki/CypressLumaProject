import UserData from '../../../test-data/UserData.js';

export default class LoginPage {

    elements ={

        // Customer Login
        // Registered Customers
        emailField : () => cy.get("#email"),
        passwordField : () => cy.get("#pass"),
        signInButton : () => cy.get("button.action.login.primary"),
    
    
        // New Customers
        createAnAccountButton : () => cy.get("a.action.create.primary"),
    
        // Messages
        alertAccountSignIncorrect : () => cy.get("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']")
        
    }

    fillEmailField(email) {
        this.elements.emailField().type(email);
        return this;
    }

    fillEmailFieldWithDefault() {
        return this.fillEmailField(UserData.emailAddress);
    }

    fillPasswordField(password) {
        this.elements.passwordField().type(password);
        return this;
    }

    fillPasswordFieldWithDefault() {
        return this.fillPasswordField(UserData.password);
    }

    clickOnSignInButton() {
        this.elements.signInButton().click();
        return this;
    }

    clickOnCreateAnAccountButton() {
        this.elements.createAnAccountButton().click();
        return this;
    }
}