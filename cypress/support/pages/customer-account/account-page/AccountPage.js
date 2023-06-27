export default class AccountPage {

    elements = {

    // MY ACCOUNT:
    // Account Information
    // Contact Information
    contactInformatonBox : () => cy.get("[class='box box-information']"),

    // Newsletters
    newsletterBox : () => cy.get("[class='box box-newsletter']"),
    editNewsletterSettingsButton : () => cy.xpath("//div[@class='box box-newsletter']//child::a[@class='action edit']"),

    // Address Book
    // Default Billing Address
    defaultBillingAddressBox : () => cy.get("[class='box box-billing-address']"),

    // Default Shipping Address
    defaultShippingAddressBox : () => cy.get("[class='box box-shipping-address']"),

    // NEWSLETTER SUBSCRIPTION:
    generalSubscriptionCheckbox : () => cy.get("#subscription"),

    // Messages:
    messageSuccess : () => cy.xpath("//div[@data-ui-id='message-success']//child::div")

    }

    clickOnEditNewsletterSettingsButton(){
        this.elements.editNewsletterSettingsButton().click();
        return this;
    }
}