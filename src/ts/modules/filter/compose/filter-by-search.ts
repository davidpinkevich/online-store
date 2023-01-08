import { TCompose, TGoodsData } from "../../../types/types";
import { filterStore } from "../data/filter-store";

export const filterBySearch: TCompose = (data: TGoodsData[]): TGoodsData[] => {
  const src = filterStore.search.toLowerCase().trim();
  const newArr: TGoodsData[] = [];

  data.forEach((item: TGoodsData) => {
    if (item.title.toLowerCase().includes(src)) {
      newArr.push(item);
      return;
    }
    if (item.brand.toLowerCase().includes(src)) {
      newArr.push(item);
      return;
    }
    if (item.category.toLowerCase().includes(src)) {
      newArr.push(item);
      return;
    }
    if (String(item.discountPercentage).includes(src)) {
      newArr.push(item);
      return;
    }
    if (String(item.price).includes(src)) {
      newArr.push(item);
      return;
    }
    if (String(item.rating).includes(src)) {
      newArr.push(item);
      return;
    }
    if (String(item.stock).includes(src)) {
      newArr.push(item);
    }
  });
  return newArr;
};
