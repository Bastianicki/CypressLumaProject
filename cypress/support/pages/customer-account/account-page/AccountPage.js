export default class AccountPage {

    messageSuccess = "//div[@data-ui-id='message-success']//child::div";
    contactInformatonBox = "[class='box box-information']";
    newsletterBox = "[class='box box-newsletter']";
    defaultBillingAddressBox = "[class='box box-billing-address']";
    defaultShippingAddressBox = "[class='box box-shipping-address']";

    editNewsletterSettingsButton = "//div[@class='box box-newsletter']//child::a[@class='action edit']"
    generalSubscriptionCheckbox = "#subscription";

    clickOnEditNewsletterSettingsButton(){
        cy.xpath(this.editNewsletterSettingsButton).click();
        return this;
    }
}