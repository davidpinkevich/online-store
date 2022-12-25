import { filterStore } from "./filter-store";

export const activeFilters = () => {
  const categoriesCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__category .checkbox__input");
  const brandsCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__brand .checkbox__input");

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
};
