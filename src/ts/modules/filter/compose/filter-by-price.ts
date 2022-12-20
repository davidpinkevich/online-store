import { TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const filterByPrice = (data: TGoodsData[]): TGoodsData[] => {
  return data.filter((datum) => {
    if (
      datum.price >= filterStore.minPrice &&
      datum.price <= filterStore.maxPrice
    )
      return datum;
  });
};
