export default class MainPageHeader{
    
    welcomeMessage = "//div[@class='panel header']//li[1]//span";

    signInButton = "//div[@class='panel header']//li[@class='authorization-link']//a";
    createAnAccountButton = "//div[@class='panel header']//li[3]//a";

    actionButton = ":nth-child(2) > .customer-welcome > .customer-name > .action";
    myAccountOption = ":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"
    myWishListOption = ":nth-child(2) > .customer-welcome > .customer-menu > .header > .link > a";
    signOutOption = ":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a";

    whatsNewMenuItem = "#ui-id-3";
    womenMenuItem = "#ui-id-4";
    menMenuItem = "#ui-id-5";
    gearMenuItem = "#ui-id-6";
    trainingMenuItem = "#ui-id-7";
    saleMenuItem = "#ui-id-8";

    clickOnSignInButton(){
        cy.xpath(this.signInButton).click();
        return this;
    }

    clickOnCreateAnAccountButton(){
        cy.xpath(this.createAnAccountButton).click();
        return this;
    }

    clickOnActionButton(){
        cy.get(this.actionButton).click();
        return this;
    }

    selectMyAccountOption(){
        cy.get(this.myAccountOption).click();
        return this;
    }

    selectMyWishListOption(){
        cy.get(this.myWishListOption).click();
        return this;
    }

    selectSignOutOption(){
        cy.get(this.signOutOption).click();
        return this;
    }

    clickOnWhatsNewMenuItem(){
        cy.get(this.whatsNewMenuItem).click();
        return this;
    }
        
    clickOnWomenMenuItem(){
        cy.get(this.womenMenuItem).click();
        return this;
    }
        
    clickOnMenMenuItem(){
        cy.get(this.menMenuItem).click();
        return this;
    }
        
    clickOnGearMenuItem(){
        cy.get(this.gearMenuItem).click();
        return this;
    }
        
    clickOnTrainingMenuItem(){
        cy.get(this.trainingMenuItem).click();
        return this;
    }
        
    clickOnSaleMenuItem(){
        cy.get(this.saleMenuItem).click();
        return this;
    }
}