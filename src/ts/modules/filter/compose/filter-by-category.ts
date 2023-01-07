import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

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
};
