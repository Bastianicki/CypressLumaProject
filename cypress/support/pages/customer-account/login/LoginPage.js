import LoginPageElements from '../../../elements/LoginPageElements.js';
import UserData from '../../../test-data/UserData.js';

const elements = new LoginPageElements();

export default class LoginPage {

    fillEmailInputField(email) {
        elements.getEmailInputField().type(email);
        return this;
    }

    fillEmailInputFieldWithDefault() {
        return this.fillEmailInputField(UserData.emailAddress);
    }

    fillPasswordInputField(password) {
        elements.getPasswordInputField().type(password);
        return this;
    }

    fillPasswordInputFieldWithDefault() {
        return this.fillPasswordInputField(UserData.password);
    }

    clickOnSignInButton() {
        elements.getSignInButton().click();
        return this;
    }

    clickOnCreateAnAccountButton() {
        elements.getCreateAnAccountButton().click();
        return this;
    }
}