import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const sortByRating: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  const bool = filterStore.rating;
  if (bool) {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return next.rating - first.rating;
    });
  }
  return data;
};
