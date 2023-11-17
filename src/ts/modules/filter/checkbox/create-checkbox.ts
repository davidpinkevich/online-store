import { TGoodsData } from "../../../types/types";
import Checkbox from "./Checkbox";

export const createСategoriesCheckbox = (data: TGoodsData[]): void => {
  const set: Set<string> = new Set(data.map((brand) => brand.category));
  const categories: string[] = Array.from(set);
  categories.forEach((brand: string) => {
    new Checkbox(brand, ".filter__category .category-items").render();
  });
  const categoryCheckbox: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".filter__category .checkbox label p span"
  );
  categoryCheckbox.forEach((item) => {
    item.innerHTML = "5";
  });
};

export const createBrandsCheckbox = (data: TGoodsData[]): void => {
  const set: Set<string> = new Set(data.map((brand) => brand.brand));
  const brands: string[] = Array.from(set);
  brands.forEach((brand: string) => {
    new Checkbox(brand, ".filter__brand .brand-items").render();
  });
  // добавялем кол-во товаров
  const brandsCheckboxLabel: NodeListOf<HTMLElement> =
    document.querySelectorAll(".filter__brand .checkbox label .first__items");
  const brandsCheckboxLabelFull: NodeListOf<HTMLElement> =
    document.querySelectorAll(".filter__brand .checkbox label .full__items");
  const brandsCheckbox: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".filter__brand .checkbox"
  );
  brandsCheckbox.forEach((a, index) => {
    let numb = 0;
    data.forEach((b) => {
      if (a.getAttribute("value") === b.brand) numb++;
    });
    Array.from(brandsCheckboxLabel)[index].innerHTML = `${numb}`;
    Array.from(brandsCheckboxLabelFull)[index].innerHTML = `${numb}`;
  });
};
