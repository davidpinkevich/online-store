import { TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const filterByBrand = (data: TGoodsData[]): TGoodsData[] => {
  if (filterStore.brands.length === 0) return data;
  return filterStore.brands
    .map((brand) => {
      return data.filter((datum) => {
        if (datum.brand === brand) return datum;
      });
    })
    .flat();
};
