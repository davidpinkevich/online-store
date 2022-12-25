import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const filterByCategory: TCompose = (
  data: TGoodsData[]
): TGoodsData[] => {
  //---------если не получится, оставить это----------
  // if (filterStore.categories.length === 0) return data;

  // return filterStore.categories
  //   .map((category) => {
  //     return data.filter((datum) => {
  //       if (datum.category === category) return datum;
  //     });
  //   })
  //   .flat();
  //--------------------------------------------
  const brandsCheckbox: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".filter__brand .checkbox"
  );
  const brandsCheckboxLabel: NodeListOf<HTMLElement> =
    document.querySelectorAll(".filter__brand .checkbox label .first__items");
  // const categotyCheckbox: NodeListOf<HTMLElement> = document.querySelectorAll(
  //   ".filter__category .checkbox"
  // );
  const arr: TGoodsData[] = [];
  filterStore.categories.forEach((miniItem: string) => {
    data.forEach((item: TGoodsData) => {
      if (item.category === miniItem) arr.push(item);
    });
  });

  const testArr = new Set();
  const arrForNumber: string[] = [];
  arr.forEach((item: TGoodsData) => {
    testArr.add(item.brand);
    arrForNumber.push(item.brand);
  });

  const arrAdd: HTMLElement[] = []; // элементы на котороые надо навесить класс
  Array.from(testArr).forEach((item) => {
    const arr = Array.from(brandsCheckbox);
    const arrTestAdd = arr.filter((a) => a.getAttribute("value") === item);
    arrAdd.push(...arrTestAdd);
  });

  Array.from(brandsCheckbox).forEach((x) => {
    x.classList.add("disabled");
  });
  // теперь добавляем класс для нужных
  arrAdd.forEach((item) => {
    item.classList.remove("disabled");
  });
  if (Array.from(testArr).length === 0) {
    Array.from(brandsCheckbox).forEach((x) => {
      x.classList.remove("disabled");
    });
  }
  // попытка изменить кол-во товаров в бренде
  // const miniData = document.querySelectorAll(".product");

  brandsCheckboxLabel.forEach((a) => {
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
    brandsCheckbox.forEach((a, index) => {
      let numb = 0;
      data.forEach((b) => {
        if (a.getAttribute("value") === b.brand) numb++;
      });
      Array.from(brandsCheckboxLabel)[index].innerHTML = `${numb}`;
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
