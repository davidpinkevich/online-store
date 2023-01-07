import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const sortByRatingMax: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.sort === "ratingmax") {
    data.sort((first: TGoodsData, next: TGoodsData) => {
      return first.rating - next.rating;
    });
  }
  return data;
};
