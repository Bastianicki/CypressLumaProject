export default class MainPageHeaderElements {

    // Panel Header
    // Welcome message
    getWelcomeMessage() {
        return cy.xpath("//div[@class='panel header']//li[1]//span");
    }

    // Header Links
    getSignInButton() {
        return cy.xpath("//div[@class='panel header']//li[@class='authorization-link']//a");
    }

    getCreateAnAccountButton() {
        return cy.xpath("//div[@class='panel header']//li[3]//a");
    }

    // Customer Menu
    getActionButton() {
        return cy.get(":nth-child(2) > .customer-welcome > .customer-name > .action");
    }

    getMyAccountOption() {
        return cy.get(":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a");
    }

    getMyWishListOption() {
        return cy.get(":nth-child(2) > .customer-welcome > .customer-menu > .header > .link > a");
    }

    getSignOutOption() {
        return cy.get(":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a");
    }

    // Tab Panel
    getWhatsNewMenuItem() {
        return cy.get("#ui-id-3");
    }

    getWomenMenuItem() {
        return cy.get("#ui-id-4");
    }

    getMenMenuItem() {
        return cy.get("#ui-id-5");
    }

    getGearMenuItem() {
        return cy.get("#ui-id-6");
    }

    getTrainingMenuItem() {
        return cy.get("#ui-id-7");
    }

    getSaleMenuItem() {
        return cy.get("#ui-id-8");
    }

    // Search
    getSearchEntireStoreField() {
        return cy.get("#search");
    }

    getSearchButton() {
        return cy.get("[title='Search']");
    }

    getShoppingCartButton() {
        return cy.get("[class='action showcart']");
    }
}