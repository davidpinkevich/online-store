import { TGoodsData } from "../../../types/types";
import { filterStore } from "../filter-store";

export function searchItems(data: TGoodsData[]): TGoodsData[] {
  const src = filterStore.search.toLowerCase();
  const newArr: TGoodsData[] = [];

  data.forEach((item: TGoodsData) => {
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
  console.log(newArr);
  return newArr;
}
