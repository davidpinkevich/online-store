import { filterGoods } from "../filter-goods";
import { addSearchQueryString } from "../query/create-query-string";

export function sortPriceMin(): void {
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
  inputPriceMin.addEventListener("click", () => {
    addSearchQueryString("sort", "pricemin");

    inputRatingMax.classList.remove("active");
    inputRatingMax.disabled = false;

    inputRatingMin.classList.remove("active");
    inputRatingMin.disabled = false;

    inputPriceMax.classList.remove("active");
    inputPriceMax.disabled = false;

    inputPriceMin.classList.add("active");
    inputPriceMin.disabled = true;

    filterGoods();
  });
}
