import { filterGoods } from "../filter-goods";
import { addSearchQueryString } from "../query/create-query-string";

export function sortPrice(): void {
  const inputRating = <HTMLButtonElement>(
    document.querySelector(".search__btn-rating")
  );
  const inputPrice = <HTMLButtonElement>(
    document.querySelector(".search__btn-price")
  );
  const inputStock = <HTMLButtonElement>(
    document.querySelector(".search__btn-stock")
  );
  inputPrice.addEventListener("click", () => {
    addSearchQueryString("sort", "price");

    inputRating.classList.remove("active");
    inputRating.disabled = false;

    inputPrice.classList.add("active");
    inputPrice.disabled = true;

    inputStock.classList.remove("active");
    inputStock.disabled = false;

    filterGoods();
  });
}
