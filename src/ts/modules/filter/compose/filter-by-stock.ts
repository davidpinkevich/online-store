import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const filterByStock: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  return data.filter((datum) => {
    if (
      datum.stock >= filterStore.minStock &&
      datum.stock <= filterStore.maxStock
    )
      return datum;
  });
};
