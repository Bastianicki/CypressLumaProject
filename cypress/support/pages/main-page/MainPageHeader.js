import MainPageHeaderElements from "../../elements/MainPageHeaderElements";

const elements = new MainPageHeaderElements();

export default class MainPageHeader {

    clickOnSignInButton() {
        elements.getSignInButton().click();
        return this;
    }

    clickOnCreateAnAccountButton() {
        elements.getCreateAnAccountButton().click();
        return this;
    }

    clickOnActionButton() {
        elements.getActionButton().click();
        return this;
    }

    selectMyAccountOption() {
        elements.getMyAccountOption().click();
        return this;
    }

    selectMyWishListOption() {
        elements.getMyWishListOption().click();
        return this;
    }

    selectSignOutOption() {
        elements.getSignOutOption().click();
        return this;
    }

    clickOnWhatsNewMenuItem() {
        elements.getWhatsNewMenuItem().click();
        return this;
    }

    clickOnWomenMenuItem() {
        elements.getWomenMenuItem().click();
        return this;
    }

    clickOnMenMenuItem() {
        elements.getMenMenuItem().click();
        return this;
    }

    clickOnGearMenuItem() {
        elements.getGearMenuItem().click();
        return this;
    }

    clickOnTrainingMenuItem() {
        elements.getTrainingMenuItem().click();
        return this;
    }

    clickOnSaleMenuItem() {
        elements.getSaleMenuItem().click();
        return this;
    }

    typeInSearchField(input) {
        elements.getSearchEntireStoreField().type(input);
        return this;
    }

    clickOnsearchButton() {
        elements.getSearchButton().click();
        return this;
    }

    clickOnShoppingCartButton() {
        elements.getShoppingCartButton().click();
        return this;
    }
}