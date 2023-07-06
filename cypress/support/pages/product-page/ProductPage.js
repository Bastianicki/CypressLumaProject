import Color from "../../enums/Color";
import Size from "../../enums/Size";
export default class ProductPage{

    elements = {

        pageTitle : () => cy.get('span.base[data-ui-id="page-title-wrapper"][itemprop="name"]'),

        // buttons
        addYourReviewButton : () => cy.get("[class='action add']"),
        addToCartButton : () => cy.get("#product-addtocart-button"),
        addToWishListButton : () => cy.xpath("//div[@class='product-addto-links']//child::a[class='action towishlist']"),
        addToComapreButton : () => cy.xpath("//div[@class='product-addto-links']//child::a[@class='action tocompare']")
    }
    
    clickOnAddYouReview(){
        this.elements.addYourReviewButton().click();
        return this;
    }

    clickOnAddToCartButton(){
        this.elements.addToCartButton().click();
        return this;
    }

    clickOnAddToWishListButton(){
        this.elements.addToWishListButton().click();
        return this;
    }

    clickOnAddToCompareButton(){
        this.elements.addToComapreButton().click();
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