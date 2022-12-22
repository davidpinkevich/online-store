import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const filterByCategory: TCompose = (
  data: TGoodsData[]
): TGoodsData[] => {
  if (filterStore.categories.length === 0) return data;

  return filterStore.categories
    .map((category) => {
      return data.filter((datum) => {
        if (datum.category === category) return datum;
      });
    })
    .flat();

  //   const brandsCheckbox: NodeListOf<HTMLInputElement> =
  //   document.querySelectorAll(".filter__brand .checkbox__input");
  // const arr: TGoodsData[] = [];
  // filterStore.categories.forEach((miniItem: string) => {
  //   data.forEach((item: TGoodsData) => {
  //     if (item.category === miniItem) arr.push(item);
  //   });
  // });

  // arr.forEach((itemSort: TGoodsData) => {
  //   brandsCheckbox.forEach((item) => {
  //     if (itemSort.brand !== item.getAttribute("id")) {
  //       item.classList.toggle("diss");
  //       item.disabled = true;
  //     }
  //   });
  // });
  // if (arr.length === 0) {
  //   return data;
  // } else {
  //   return arr;
  // }
};
