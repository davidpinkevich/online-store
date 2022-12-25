import { filterGoods } from "./filter-goods";
import { addSearchQueryString } from "./create-query-string";

export function sortRating(): void {
  const inputRating = <HTMLButtonElement>(
    document.querySelector(".search__btn-rating")
  );
  const inputPrice = <HTMLButtonElement>(
    document.querySelector(".search__btn-price")
  );
  const inputStock = <HTMLButtonElement>(
    document.querySelector(".search__btn-stock")
  );
  inputRating.addEventListener("click", () => {
    addSearchQueryString("sort", "rating");

    inputRating.classList.add("active");
    inputRating.disabled = true;

    inputPrice.classList.remove("active");
    inputPrice.disabled = false;

    inputStock.classList.remove("active");
    inputStock.disabled = false;
    filterGoods();
  });
}
