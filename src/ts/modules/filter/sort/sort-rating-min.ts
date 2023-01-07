import { filterGoods } from "../filter-goods";
import { addSearchQueryString } from "../query/create-query-string";

export function sortRatingMin(): void {
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
  inputRatingMin.addEventListener("click", () => {
    addSearchQueryString("sort", "ratingmin");

    inputRatingMax.classList.remove("active");
    inputRatingMax.disabled = false;

    inputRatingMin.classList.add("active");
    inputRatingMin.disabled = true;

    inputPriceMax.classList.remove("active");
    inputPriceMax.disabled = false;

    inputPriceMin.classList.remove("active");
    inputPriceMin.disabled = false;

    filterGoods();
  });
}
