import { filterStore } from "./filter-store";
import { filterGoods } from "./filter-goods";

export function filterSearch(): void {
  const inputSearch = <HTMLInputElement>document.querySelector(".search-input");
  inputSearch.addEventListener("input", () => {
    filterStore.search = inputSearch.value;
    filterGoods();
  });
}
