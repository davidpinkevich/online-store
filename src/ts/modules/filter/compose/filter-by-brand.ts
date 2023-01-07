import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const filterByBrand: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.brands.length === 0) return data;
  return filterStore.brands
    .map((brand) => {
      return data.filter((datum) => {
        if (datum.brand === brand) return datum;
      });
    })
    .flat();
};
