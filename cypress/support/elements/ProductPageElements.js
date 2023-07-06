export default class ProductPageElements{

    getPageTitle(){
        return cy.get('span.base[data-ui-id="page-title-wrapper"][itemprop="name"]');
    }

    // buttons
    getAddYourReviewButton(){
        return cy.get("[class='action add']");
    }

    getAddToCartButton(){
        return cy.get("#product-addtocart-button");
    }

    getAddToWishListButton(){
        return cy.xpath("//div[@class='product-addto-links']//child::a[class='action towishlist']");
    }

    getAddToComapreButton(){
        return cy.xpath("//div[@class='product-addto-links']//child::a[@class='action tocompare']");
    }
}