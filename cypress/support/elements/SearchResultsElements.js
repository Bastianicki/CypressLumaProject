export default class SearchResultsElements{

    getFirstItemFiltered(){
        return cy.xpath("//ol[@class='products list items product-items']//child::li[1]");
    }

    getSecondItemFiltered(){
        return cy.xpath("//ol[@class='products list items product-items']//child::li[1]")
    }

    getThirdItemFiltered(){
        return cy.xpath("//ol[@class='products list items product-items']//child::li[3]")
    }

    getFourthItemFiltered(){
        return cy.xpath("//ol[@class='products list items product-items']//child::li[4]")
    }

    getFifthItemFiltered(){
        return cy.xpath("//ol[@class='products list items product-items']//child::li[5]");
    }
}