import SearchResultsElements from "../../elements/SearchResultsElements";

const elements = new SearchResultsElements();

export default class SearchResults {

    selectFirstItemFitered() {
        elements.getFirstItemFiltered().click();
        return this;
    }

    selectSecondItemFitered() {
        elements.getSecondItemFiltered().click();
        return this;
    }

    selectThirdItemFitered() {
        elements.getThirdItemFiltered().click();
        return this;
    }

    selectFourthItemFitered() {
        elements.getFourthItemFiltered().click();
        return this;
    }

    selectFifthItemFitered() {
        elements.getFifthItemFiltered().click();
        return this;
    }
}