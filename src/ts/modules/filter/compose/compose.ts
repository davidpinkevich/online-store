import { TCompose, TGoodsData } from "../../../types/types";
import { filterByBrand } from "./filter-by-brand";
import { filterByCategory } from "./filter-by-category";
import { filterByPrice } from "./filter-by-price";
import { filterBySearch } from "./filter-by-search";
import { filterByStock } from "./filter-by-stock";
import { sortByRatingMax } from "./sort-by-rating-max";
import { sortByRatingMin } from "./sort-by-rating-min";
import { sortByPriceMax } from "./sort-by-price-max";
import { sortByPriceMin } from "./sort-by-price-min";
import { sortByStock } from "./sort-by-stock";

const compose =
  (...fns: TCompose[]) =>
  (data: TGoodsData[]) =>
    fns.reduceRight((acc, fn) => fn(acc), data);

export const myCompose = compose(
  sortByRatingMax,
  sortByRatingMin,
  sortByPriceMax,
  sortByPriceMin,
  sortByStock,
  filterByCategory,
  filterByBrand,
  filterByStock,
  filterByPrice,
  filterBySearch
);
