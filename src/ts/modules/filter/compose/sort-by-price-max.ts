import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByPriceMax: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.sort === "pricemax") {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return first.price - next.price;
    });
  }
  return data;
};
