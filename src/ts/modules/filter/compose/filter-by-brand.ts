import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const filterByBrand: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  // if (filterStore.brands.length === 0) return data;
  // return filterStore.brands
  //   .map((brand) => {
  //     return data.filter((datum) => {
  //       if (datum.brand === brand) return datum;
  //     });
  //   })
  //   .flat();

  const categoryCheckbox: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".filter__category .checkbox"
  );
  const categoryCheckboxLabel: NodeListOf<HTMLElement> =
    document.querySelectorAll(
      ".filter__category .checkbox label p .first__items"
    );
  // const brandsCheckbox: NodeListOf<HTMLElement> = document.querySelectorAll(
  //   ".filter__brand .checkbox"
  // );
  const arr: TGoodsData[] = [];
  filterStore.brands.forEach((miniItem: string) => {
    data.forEach((item: TGoodsData) => {
      if (item.brand === miniItem) arr.push(item);
    });
  });

  const testArr = new Set();
  const arrForNumber: string[] = [];
  arr.forEach((item: TGoodsData) => {
    testArr.add(item.category);
    arrForNumber.push(item.category);
  });

  const arrAdd: HTMLElement[] = []; // элементы на котороые надо навесить класс
  Array.from(testArr).forEach((item) => {
    const arr = Array.from(categoryCheckbox);
    const arrTestAdd = arr.filter((a) => a.getAttribute("value") === item);
    arrAdd.push(...arrTestAdd);
  });
  // сперва удаляем класс со всех
  Array.from(categoryCheckbox).forEach((x) => {
    x.classList.add("disabled");
  });
  // теперь добавляем класс для нужных
  arrAdd.forEach((item) => {
    item.classList.remove("disabled");
  });
  if (arrAdd.length === 0) {
    Array.from(categoryCheckbox).forEach((x) => {
      x.classList.remove("disabled");
    });
  }

  // попытка добавитб кол-во товаров для категорий
  categoryCheckboxLabel.forEach((a) => {
    let curr = 0;
    arrForNumber.forEach((b) => {
      if (
        a.parentElement?.parentElement?.previousElementSibling?.getAttribute(
          "value"
        ) === b
      ) {
        curr++;
      }
    });
    a.innerHTML = `${curr}`;
    if (curr === 0) a.classList.add("disabled");
  });
  if (arrAdd.length === 0) {
    categoryCheckbox.forEach((a, index) => {
      let numb = 0;
      data.forEach((b) => {
        if (a.getAttribute("value") === b.category) numb++;
      });
      Array.from(categoryCheckboxLabel)[index].innerHTML = `${numb}`;
      if (numb === 0) a.classList.add("disabled");
    });
  }
  //--------------------------------------------------------------
  if (arr.length === 0) {
    return data;
  } else {
    return arr;
  }
};
