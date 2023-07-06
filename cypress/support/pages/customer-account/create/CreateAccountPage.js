import CreateAccountPageElements from '../../../elements/CreateAccountPageElements.js';
import RandomData from '../../../test-data/RandomData.js';

const elements = new CreateAccountPageElements();

export default class CreateAccountPage {

    fillFirstNameInputField(firstName) {
        elements.getFirstNameInputField().type(firstName);
        return this;
    }

    fillPasswordInputFieldWithRandom() {
        const randomFirstName = RandomData.generateRandomFirstName();
        return this.fillPasswordInputField(randomFirstName);
    }

    fillLastNameInputField(lastName) {
        elements.getLastNameInputField().type(lastName);
        return this;
    }

    fillLastNameInputFieldWithRandom() {
        const randomLastName = RandomData.generateRandomLastName();
        return this.fillLastNameInputField(randomLastName);
    }

    toggleSignUpForNewsLetterCheckbox(shouldClick) {
        if (shouldClick) {
            elements.getSignUpForNewsLetterCheckbox().click();
        }
        return this;
    }

    fillEmailInputField(email) {
        elements.getEmailInputField().type(email);
        return this;
    }

    fillEmailInputFieldWithRandom() {
        const randomEmailAddress = RandomData.generateRandomEmailAddress();
        return this.fillEmailInputField(randomEmailAddress);
    }

    fillPasswordInputField(password) {
        elements.getPasswordInputField().type(password);
        return this;
    }

    fillConfirmPasswordInputField(password) {
        elements.getConfirmPasswordInputField().type(password);
        return this;
    }

    fillBothPasswordInputFields(password) {
        elements.getPasswordInputField().type(password);
        elements.getConfirmPasswordInputField().type(password);
        return this;
    }

    fillBothPasswordInputFieldsWithRandomData() {
        const randomPassword = RandomData.generateRandomPassword(20);
        return this.fillBothPasswordInputFields(randomPassword);
    }

    clickOnCreateAnAccountButton() {
        elements.getCreateAnAccountButton().click();
        return this;
    }
}