import ProductPageElements from "../../elements/ProductPageElements";
import Color from "../../enums/Color";
import Size from "../../enums/Size";

const elements = new ProductPageElements();

export default class ProductPage{

   
    clickOnAddYouReview(){
      elements.getAddYourReviewButton().click();
        return this;
    }

    clickOnAddToCartButton(){
        elements.getAddToCartButton().click();
        return this;
    }

    clickOnAddToWishListButton(){
        elements.getAddToWishListButton().click();
        return this;
    }

    clickOnAddToCompareButton(){
        elements.getAddToComapreButton().click();
        return this;
    }

    pickColorOfProduct(color){
        switch (color) {
            case Color.Orange:
              cy.get('.swatch-option[option-label="Orange"]').click();
              break;
            case Color.Purple:
              cy.get('.swatch-option[option-label="Purple"]').click();
              break;
            case Color.Red:
              cy.get('.swatch-option[option-label="Red"]').click();
              break;
            default:
              throw new Error(`Invalid color: ${color}`);
        }
        return this;
    }

    pickSizeOfProduct(size){
        switch (size) {
            case Size.XS:
              cy.get('.swatch-option[option-label="XS"]').click();
              break;
            case Size.S:
              cy.get('.swatch-option[option-label="S"]').click();
              break;
            case Size.M:
              cy.get('.swatch-option[option-label="M"]').click();
              break;
            case Size.L:
              cy.get('.swatch-option[option-label="L"]').click();
              break;
            case Size.XL:
              cy.get('.swatch-option[option-label="XL"]').click();
              break;
            default:
              throw new Error(`Invalid size: ${size}`);
        }
        return this;
    }

   
}