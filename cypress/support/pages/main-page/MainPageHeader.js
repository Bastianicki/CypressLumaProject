export default class MainPageHeader{
    
    elements = {

        // Panel Header
        // Welcome mWssage
        welcomeMessage : () => cy.xpath("//div[@class='panel header']//li[1]//span"),

        // Header Links
        signInButton : () => cy.xpath("//div[@class='panel header']//li[@class='authorization-link']//a"),
        createAnAccountButton : () => cy.xpath("//div[@class='panel header']//li[3]//a"),

        // Customer Menu
        actionButton : () => cy.get(":nth-child(2) > .customer-welcome > .customer-name > .action"),
        myAccountOption : () => cy.get(":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"),
        myWishListOption : () => cy.get(":nth-child(2) > .customer-welcome > .customer-menu > .header > .link > a"),
        signOutOption : () => cy.get(":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a"),

        // Tab Panel
        whatsNewMenuItem : () => cy.get("#ui-id-3"),
        womenMenuItem : () => cy.get("#ui-id-4"),
        menMenuItem : () => cy.get("#ui-id-5"),
        gearMenuItem : () => cy.get("#ui-id-6"),
        trainingMenuItem : () => cy.get("#ui-id-7"),
        saleMenuItem : () => cy.get("#ui-id-8")
    }

    clickOnSignInButton(){
        this.elements.signInButton().click();
        return this;
    }

    clickOnCreateAnAccountButton(){
        this.elements.createAnAccountButton().click();
        return this;
    }

    clickOnActionButton(){
        this.elements.actionButton().click();
        return this;
    }

    selectMyAccountOption(){
        this.elements.myAccountOption().click();
        return this;
    }

    selectMyWishListOption(){
        this.elements.myWishListOption().click();
        return this;
    }

    selectSignOutOption(){
        this.elements.signOutOption().click();
        return this;
    }

    clickOnWhatsNewMenuItem(){
        this.elements.whatsNewMenuItem().click();
        return this;
    }
        
    clickOnWomenMenuItem(){
        this.elements.womenMenuItem().click();
        return this;
    }
        
    clickOnMenMenuItem(){
        this.elements.menMenuItem().click();
        return this;
    }
        
    clickOnGearMenuItem(){
        this.elements.gearMenuItem().click();
        return this;
    }
        
    clickOnTrainingMenuItem(){
        this.elements.trainingMenuItem().click();
        return this;
    }
        
    clickOnSaleMenuItem(){
        this.elements.saleMenuItem().click();
        return this;
    }
}