import { TCompose, TGoodsData } from "../../../types/types";
import { filterByBrand } from "./filter-by-brand";
import { filterByCategory } from "./filter-by-category";
import { filterByPrice } from "./filter-by-price";
import { filterBySearch } from "./filter-by-search";
import { filterByStock } from "./filter-by-stock";
import { sortByRating } from "./sort-by-rating";
import { sortByPrice } from "./sort-by-price";
import { sortByStock } from "./sort-by-stock";

const compose =
  (...fns: TCompose[]) =>
  (data: TGoodsData[]) =>
    fns.reduceRight((acc, fn) => fn(acc), data);

export const myCompose = compose(
  sortByRating,
  sortByPrice,
  sortByStock,
  filterByCategory,
  filterByBrand,
  filterByStock,
  filterByPrice,
  filterBySearch
);
