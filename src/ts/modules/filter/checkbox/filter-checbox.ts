import { addQueryString } from "../query/create-query-string";
import { filterGoods } from "../filter-goods";

const filterHandler = () => {
  const categoriesCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__category .checkbox__input");
  const brandsCheckbox: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".filter__brand .checkbox__input");

  categoriesCheckbox.forEach((categoryCheckbox) => {
    categoryCheckbox.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      addQueryString("category", target.value);
      filterGoods();
    });
  });

  brandsCheckbox.forEach((brandCheckbox) => {
    brandCheckbox.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      addQueryString("brand", target.value);
      filterGoods();
    });
  });
};

export default filterHandler;
