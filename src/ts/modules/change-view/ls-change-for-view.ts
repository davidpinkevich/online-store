import { addSearchQueryString } from "../filter/query/create-query-string";
import { readQueryString } from "../filter/query/read-query-string";
import { changeView } from "./change-view";

export function changeViewItems(): void {
  const one = <HTMLButtonElement>document.querySelector(".search__change-one");
  const two = <HTMLButtonElement>document.querySelector(".search__change-two");

  one.addEventListener("click", () => {
    two.classList.remove("search__change-two_active");
    one.classList.add("search__change-one_active");
    addSearchQueryString("big", "true");
    readQueryString();
    changeView();
  });
  two.addEventListener("click", () => {
    one.classList.remove("search__change-one_active");
    two.classList.add("search__change-two_active");
    addSearchQueryString("big", "false");
    readQueryString();
    changeView();
  });
}
