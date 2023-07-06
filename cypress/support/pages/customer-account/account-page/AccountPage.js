import AccountPageElements from "../../../elements/AccountPageElements";

const elements = new AccountPageElements();

export default class AccountPage {

    clickOnEditNewsletterSettingsButton(){
        elements.getNewsletterSettingsButton().click();
        return this;
    }
}