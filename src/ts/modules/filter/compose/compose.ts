import { TCompose, TGoodsData } from "../../../types/types";
import { filterByBrand } from "./filter-by-brand";
import { filterByCategory } from "./filter-by-category";
import { filterByPrice } from "./filter-by-price";
import { filterBySearch } from "./filter-by-search";
import { filterByStock } from "./filter-by-stock";

const compose =
  (...fns: TCompose[]) =>
  (data: TGoodsData[]) =>
    fns.reduceRight((acc, fn) => fn(acc), data);

export const myCompose = compose(
  filterByCategory,
  filterByBrand,
  filterByStock,
  filterByPrice,
  filterBySearch
);
