import { filterGoods } from "../filter-goods";
import { addSearchQueryString } from "../query/create-query-string";

export function sortRatingMax(): void {
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
  inputRatingMax.addEventListener("click", () => {
    addSearchQueryString("sort", "ratingmax");

    inputRatingMax.classList.add("active");
    inputRatingMax.disabled = true;

    inputRatingMin.classList.remove("active");
    inputRatingMin.disabled = false;

    inputPriceMax.classList.remove("active");
    inputPriceMax.disabled = false;

    inputPriceMin.classList.remove("active");
    inputPriceMin.disabled = false;

    filterGoods();
  });
}
