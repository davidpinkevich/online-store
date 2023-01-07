import { filterGoods } from "../filter-goods";
import { addSearchQueryString } from "../query/create-query-string";

export function sortPriceMax(): void {
  const inputRatingMax = <HTMLButtonElement>(
    document.querySelector(".search__btn-rating-max")
  );
  const inputRatingMin = <HTMLButtonElement>(
    document.querySelector(".search__btn-rating-min")
  );
  const inputPriceMax = <HTMLButtonElement>(
    document.querySelector(".search__btn-price-max")
  );
  const inputPriceMin = <HTMLButtonElement>(
    document.querySelector(".search__btn-price-min")
  );
  inputPriceMax.addEventListener("click", () => {
    addSearchQueryString("sort", "pricemax");

    inputRatingMax.classList.remove("active");
    inputRatingMax.disabled = false;

    inputPriceMax.classList.add("active");
    inputPriceMax.disabled = true;

    inputPriceMin.classList.remove("active");
    inputPriceMin.disabled = false;

    inputRatingMin.classList.remove("active");
    inputRatingMin.disabled = false;

    filterGoods();
  });
}
