import SearchResults from "../support/pages/catalog-search/SearchResults";
import ShoppingCart from "../support/pages/checkout-cart/ShoppingCart";
import LoginPage from "../support/pages/customer-account/login/LoginPage";
import MainPageHeader from "../support/pages/main-page/MainPageHeader";
import ProductPage from "../support/pages/product-page/ProductPage";
import RandomData from '../support/test-data/RandomData';
import UserData from '../support/test-data/UserData';
import Size from "../support/enums/Size";
import Color from "../support/enums/Color";

const loginPage = new LoginPage();
const mainPageHeader = new MainPageHeader();
const shoppingCart = new ShoppingCart();
const searchResults= new SearchResults();
const productPage = new ProductPage();

describe('Magento Shop Application', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    });

    it('should add "Inez Full Zip Jacket" product to the cart', () => {
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

        searchResults
            .selectFirstItemFitered();

        productPage
            .pickColorOfProduct(Color.Orange)
            .pickSizeOfProduct(Size.M)
            .clickOnAddToCartButton();

            // in progress

        });

    });