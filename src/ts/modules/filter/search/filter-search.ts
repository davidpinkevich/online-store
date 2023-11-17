import { filterGoods } from "../filter-goods";
import { addSearchQueryString } from "../query/create-query-string";

export function filterSearch(): void {
  const inputSearch = <HTMLInputElement>document.querySelector(".search-input");
  inputSearch.addEventListener("input", () => {
    addSearchQueryString("search", inputSearch.value);
    filterGoods();
  });
}
