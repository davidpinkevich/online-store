import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const sortByRating: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.sort === "rating") {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return next.rating - first.rating;
    });
  }
  return data;
};
