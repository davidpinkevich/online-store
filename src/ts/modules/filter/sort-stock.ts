import { filterGoods } from "./filter-goods";
import { addSearchQueryString } from "./create-query-string";

export function sortStock(): void {
  const inputRating = <HTMLButtonElement>(
    document.querySelector(".search__btn-rating")
  );
  const inputPrice = <HTMLButtonElement>(
    document.querySelector(".search__btn-price")
  );
  const inputStock = <HTMLButtonElement>(
    document.querySelector(".search__btn-stock")
  );
  inputStock.addEventListener("click", () => {
    addSearchQueryString("sort", "stock");

    inputRating.classList.remove("active");
    inputRating.disabled = false;

    inputPrice.classList.remove("active");
    inputPrice.disabled = false;

    inputStock.classList.add("active");
    inputStock.disabled = true;

    filterGoods();
  });
}
