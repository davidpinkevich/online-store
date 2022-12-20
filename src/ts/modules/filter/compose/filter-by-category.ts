import { TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const filterByCategory = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.categories.length === 0) return data;
  return filterStore.categories
    .map((category) => {
      return data.filter((datum) => {
        if (datum.category === category) return datum;
      });
    })
    .flat();
};
