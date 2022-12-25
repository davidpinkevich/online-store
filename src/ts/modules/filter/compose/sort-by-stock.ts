import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByStock: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.sort === "stock") {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return next.stock - first.stock;
    });
  }
  return data;
};
