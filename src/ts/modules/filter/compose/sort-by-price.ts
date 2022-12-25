import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const sortByPrice: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.sort === "price") {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return next.price - first.price;
    });
  }
  return data;
};
