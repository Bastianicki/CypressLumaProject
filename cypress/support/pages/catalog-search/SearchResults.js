export default class SearchResults{

    elements = {

            firstItemfiltered : () => cy.xpath("//ol[@class='products list items product-items']//child::li[1]"),
            secondItemFiltered : () => cy.xpath("//ol[@class='products list items product-items']//child::li[2]"),
            thirdItemFiltered : () => cy.xpath("//ol[@class='products list items product-items']//child::li[3]"),
            fourthItemFiltered : () => cy.xpath("//ol[@class='products list items product-items']//child::li[4]"),
            fifthItemFiltered : () => cy.xpath("//ol[@class='products list items product-items']//child::li[5]")
    }

    selectFirstItemFitered(){
        this.elements.firstItemfiltered().click();
        return this;
    }

}