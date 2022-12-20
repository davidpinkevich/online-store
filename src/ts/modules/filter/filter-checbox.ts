import { filterStore } from "./filter-store";
import { filterGoods } from "./filter-goods";

const filterHandler = () => {
  const categoriesCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__category .checkbox__input");
  const brandsCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__brand .checkbox__input");

  categoriesCheckbox.forEach((categoryCheckbox) => {
    categoryCheckbox.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        filterStore.categories.push(target.value);
      } else {
        filterStore.categories = filterStore.categories.filter(
          (el) => el !== target.value
        );
      }
      filterGoods();
    });
  });

  brandsCheckbox.forEach((brandCheckbox) => {
    brandCheckbox.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        filterStore.brands.push(target.value);
      } else {
        filterStore.brands = filterStore.brands.filter(
          (el) => el !== target.value
        );
      }
      filterGoods();
    });
  });
};

export default filterHandler;
