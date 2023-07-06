export default class AccountPageElements {

    // MY ACCOUNT:
    // (1) Account Information
    // Contact Information
    getContactInformationBox() {
        return cy.get("[class='box box-information']");
    }

    // Newsletters
    getNewsletterBox() {
        return cy.get("[class='box box-newsletter']");
    }

    getNewsletterSettingsButton() {
        return cy.xpath("//div[@class='box box-newsletter']//child::a[@class='action edit']");
    }

    // (2) Address Book
    // Default Billing Address
    getDefaultBillingAddressBox() {
        return cy.get("[class='box box-billing-address']");
    }

    // Default Shipping Address
    getDefaultShippingAddressBox() {
        return cy.get("[class='box box-shipping-address']");
    }

    // NEWSLETTER SUBSCRIPTION:
    getGeneralSubscriptionCheckbox(){
        return cy.get("#subscription");
    }

    // Messages:
    getMessageSuccess(){
        return cy.xpath("//div[@data-ui-id='message-success']//child::div");
    }
}