import { goodsData } from "../../data/goods-data";
import { filterByBrand } from "./compose/filter-by-brand";
import { filterByCategory } from "./compose/filter-by-category";
import { filterByPrice } from "./compose/filter-by-price";
import { filterByStock } from "./compose/filter-by-stock";

export const filterGoods = () => {
  console.log(filterByCategory(goodsData));
  console.log(filterByBrand(goodsData));
  console.log(filterByStock(goodsData));
  console.log(filterByPrice(goodsData));
};
