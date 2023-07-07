import SearchResults from "../support/pages/catalog-search/SearchResults";
import ShoppingCart from "../support/pages/checkout-cart/ShoppingCart";
import LoginPage from "../support/pages/customer-account/login/LoginPage";
import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import ProductPage from "../support/pages/product-page/ProductPage";
import Size from "../support/enums/Size";
import Color from "../support/enums/Color";
import ProductPageElements from "../support/elements/ProductPageElements";

import RandomData from '../support/test-data/RandomData';
import UserData from '../support/test-data/UserData';

const loginPage = new LoginPage();
const mainPageHeader = new MainPageHeader();
const shoppingCart = new ShoppingCart();
const searchResults = new SearchResults();
const productPage = new ProductPage();
const elementsOfProductPage = new ProductPageElements();

describe('Magento Shop Application', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    });

    it('should add "Inez Full Zip Jacket" product to the cart and verify whether new element about success appear', () => {
        // Arrange: Click on the login link
        //cy.get('.header.links').contains('Sign In').click();
        mainPageHeader
            .clickOnSignInButton();

        // Act: Enter valid login credentials and submit the form
        loginPage
            .fillEmailInputFieldWithDefault()
            .fillPasswordInputFieldWithDefault()
            .clickOnSignInButton();

        mainPageHeader
            .typeInSearchField("Inez Full Zip Jacket")
            .clickOnsearchButton();

        cy.wrap(searchResults.selectFirstItemFitered()).then(() => {
            cy.wait(5000);
        });


        productPage
            .pickSizeOfProduct(Size.M)
            .pickColorOfProduct(Color.Orange)
            .clickOnAddToCartButton();

        // Assert:
        const expectedElement = elementsOfProductPage.getProductAddedMessage();
        expectedElement.should('be.visible');
    });

    it('should add "Inez Full Zip Jacket" product to the cart and verify whether new element contains appropriate message', () => {
        // Arrange: Click on the login link
        //cy.get('.header.links').contains('Sign In').click();
        mainPageHeader
            .clickOnSignInButton();

        // Act: Enter valid login credentials and submit the form
        loginPage
            .fillEmailInputFieldWithDefault()
            .fillPasswordInputFieldWithDefault()
            .clickOnSignInButton();

        mainPageHeader
            .typeInSearchField("Inez Full Zip Jacket")
            .clickOnsearchButton();

        cy.wrap(searchResults.selectFirstItemFitered()).then(() => {
            cy.wait(5000);
        });

        productPage
            .pickSizeOfProduct(Size.M)
            .pickColorOfProduct(Color.Orange)
            .clickOnAddToCartButton();

        // Assert:
        const expectedTextInElement = "You added Inez Full Zip Jacket to your shopping cart.";
        elementsOfProductPage.getProductAddedMessage().should('contain', expectedTextInElement);
    });

});