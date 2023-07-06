export default class ProductPage{

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


    elements = {

        pageTitle : () => cy.get('span.base[data-ui-id="page-title-wrapper"][itemprop="name"]'),

        // buttons
        addYourReviewButton : () => cy.get("[class='action add']"),
        addToCartButton : () => cy.get("#product-addtocart-button"),
        addToWishListButton : () => cy.xpath("//div[@class='product-addto-links']//child::a[class='action towishlist']"),
        addToComapreButton : () => cy.xpath("//div[@class='product-addto-links']//child::a[@class='action tocompare']")
    }
}