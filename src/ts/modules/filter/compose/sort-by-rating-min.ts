import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByRatingMin: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.sort === "ratingmin") {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return next.rating - first.rating;
    });
  }
  return data;
};
