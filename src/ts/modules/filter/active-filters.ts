import { filterStore } from "./data/filter-store";
import { readQueryString } from "./query/read-query-string";

export const activeFilters = (): void => {
  readQueryString();
  const categoriesCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__category .checkbox__input");
  const brandsCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__brand .checkbox__input");
  const inputSearch = <HTMLInputElement>document.querySelector(".search-input");
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
  const rangeStock: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    ".filter__stock input"
  );
  const rangePrice: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    ".filter__price input"
  );
  const stockMin = document.querySelector(
    ".filter__stock-min"
  ) as HTMLDivElement;
  const stockMax = document.querySelector(
    ".filter__stock-max"
  ) as HTMLDivElement;
  const priceMin = document.querySelector(
    ".filter__price-min"
  ) as HTMLDivElement;
  const priceMax = document.querySelector(
    ".filter__price-max"
  ) as HTMLDivElement;
  const progressStock = document.querySelector(
    ".filter__stock .progress"
  ) as HTMLDivElement;
  const progressPrice = document.querySelector(
    ".filter__price .progress"
  ) as HTMLDivElement;
  const one = <HTMLButtonElement>document.querySelector(".search__change-one");
  const two = <HTMLButtonElement>document.querySelector(".search__change-two");

  filterStore.categories.forEach((category) => {
    categoriesCheckbox.forEach((categoryCheckbox) => {
      if (category === categoryCheckbox.value) {
        categoryCheckbox.checked = true;
      }
    });
  });

  filterStore.brands.forEach((brand) => {
    brandsCheckbox.forEach((brandCheckbox) => {
      if (brand === brandCheckbox.value) {
        brandCheckbox.checked = true;
      }
    });
  });

  inputSearch.value = filterStore.search;

  if (filterStore.sort === "ratingmax") {
    inputRatingMax.classList.add("active");
    inputRatingMax.disabled = true;

    inputRatingMin.classList.remove("active");
    inputRatingMin.disabled = false;

    inputPriceMax.classList.remove("active");
    inputPriceMax.disabled = false;

    inputPriceMin.classList.remove("active");
    inputPriceMin.disabled = false;
  }

  if (filterStore.sort === "ratingmin") {
    inputRatingMax.classList.remove("active");
    inputRatingMax.disabled = false;

    inputRatingMin.classList.add("active");
    inputRatingMin.disabled = true;

    inputPriceMax.classList.remove("active");
    inputPriceMax.disabled = false;

    inputPriceMin.classList.remove("active");
    inputPriceMin.disabled = false;
  }

  if (filterStore.sort === "pricemax") {
    inputRatingMax.classList.remove("active");
    inputRatingMax.disabled = false;

    inputRatingMin.classList.remove("active");
    inputRatingMin.disabled = false;

    inputPriceMax.classList.add("active");
    inputPriceMax.disabled = true;

    inputPriceMin.classList.remove("active");
    inputPriceMin.disabled = false;
  }

  if (filterStore.sort === "pricemin") {
    inputRatingMax.classList.remove("active");
    inputRatingMax.disabled = false;

    inputRatingMin.classList.remove("active");
    inputRatingMin.disabled = false;

    inputPriceMax.classList.remove("active");
    inputPriceMax.disabled = false;

    inputPriceMin.classList.add("active");
    inputPriceMin.disabled = true;
  }

  rangeStock[0].value = `${filterStore.minStock}`;
  rangeStock[1].value = `${filterStore.maxStock}`;
  stockMin.textContent = `${filterStore.minStock}`;
  stockMax.textContent = `${filterStore.maxStock}`;
  const maximumStock: number = +rangeStock[1].max;
  progressStock.style.left = (filterStore.minStock / maximumStock) * 100 + "%";
  progressStock.style.right =
    100 - (filterStore.maxStock / maximumStock) * 100 + "%";

  rangePrice[0].value = `${filterStore.minPrice}`;
  rangePrice[1].value = `${filterStore.maxPrice}`;
  priceMin.textContent = `${filterStore.minPrice}`;
  priceMax.textContent = `${filterStore.maxPrice}`;
  const maximumPrice: number = +rangePrice[1].max;
  progressPrice.style.left = (filterStore.minPrice / maximumPrice) * 100 + "%";
  progressPrice.style.right =
    100 - (filterStore.maxPrice / maximumPrice) * 100 + "%";

  if (filterStore.big === "true") {
    two.classList.remove("search__change-two_active");
    one.classList.add("search__change-one_active");
  }

  if (filterStore.big === "false") {
    one.classList.remove("search__change-one_active");
    two.classList.add("search__change-two_active");
  }
};
