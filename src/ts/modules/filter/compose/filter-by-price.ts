import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const filterByPrice: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  return data.filter((datum) => {
    if (
      datum.price >= filterStore.minPrice &&
      datum.price <= filterStore.maxPrice
    )
      return datum;
  });
};
