import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByPriceMin: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.sort === "pricemin") {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return next.price - first.price;
    });
  }
  return data;
};
