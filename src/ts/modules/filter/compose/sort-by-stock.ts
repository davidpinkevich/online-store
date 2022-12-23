import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const sortByStock: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  const bool = filterStore.stock;
  if (bool) {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return next.stock - first.stock;
    });
  }
  return data;
};
