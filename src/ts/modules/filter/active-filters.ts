import { filterStore } from "./data/filter-store";

export const activeFilters = (): void => {
  const categoriesCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__category .checkbox__input");
  const brandsCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__brand .checkbox__input");
  const inputSearch = <HTMLInputElement>document.querySelector(".search-input");
  const inputRating = <HTMLButtonElement>(
    document.querySelector(".search__btn-rating")
  );
  const inputPrice = <HTMLButtonElement>(
    document.querySelector(".search__btn-price")
  );
  const inputStock = <HTMLButtonElement>(
    document.querySelector(".search__btn-stock")
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

  if (filterStore.sort === "stock") {
    inputRating.classList.remove("active");
    inputRating.disabled = false;

    inputPrice.classList.remove("active");
    inputPrice.disabled = false;

    inputStock.classList.add("active");
    inputStock.disabled = true;
  }

  if (filterStore.sort === "price") {
    inputRating.classList.remove("active");
    inputRating.disabled = false;

    inputPrice.classList.add("active");
    inputPrice.disabled = true;

    inputStock.classList.remove("active");
    inputStock.disabled = false;
  }

  if (filterStore.sort === "rating") {
    inputRating.classList.add("active");
    inputRating.disabled = true;

    inputPrice.classList.remove("active");
    inputPrice.disabled = false;

    inputStock.classList.remove("active");
    inputStock.disabled = false;
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
