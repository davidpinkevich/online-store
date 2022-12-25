import { addQueryString } from "./create-query-string";
import { filterGoods } from "./filter-goods";

const filterHandler = () => {
  const categoriesCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__category .checkbox__input");
  const brandsCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__brand .checkbox__input");

  categoriesCheckbox.forEach((categoryCheckbox) => {
    categoryCheckbox.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      addQueryString("category", target.value);
      // if (target.checked) {
      //   addQueryString("category", target.value);
      //   // filterStore.categories.push(target.value);
      // } else {
      //   addQueryString("category", target.value);
      //   // filterStore.categories = filterStore.categories.filter(
      //   //   (el) => el !== target.value
      //   // );
      // }
      // readQueryString();
      filterGoods();
    });
  });

  brandsCheckbox.forEach((brandCheckbox) => {
    brandCheckbox.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      addQueryString("brand", target.value);
      // if (target.checked) {
      //   addQueryString("brand", target.value);
      //   // filterStore.brands.push(target.value);
      // } else {
      //   addQueryString("brand", target.value);
      //   // filterStore.brands = filterStore.brands.filter(
      //   //   (el) => el !== target.value
      //   // );
      // }
      filterGoods();
    });
  });
};

export default filterHandler;
