import { TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export const filterByStock = (data: TGoodsData[]): TGoodsData[] => {
  return data.filter((datum) => {
    if (
      datum.stock >= filterStore.minStock &&
      datum.stock <= filterStore.maxStock
    )
      return datum;
  });
};
