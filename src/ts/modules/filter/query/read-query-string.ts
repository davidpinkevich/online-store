import { filterStore } from "../data/filter-store";

export const readQueryString = (): void => {
  const searchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(searchParams.entries());
  filterStore.categories = params.category ? params.category.split("↕") : [];
  filterStore.brands = params.brand ? params.brand.split("↕") : [];
  const prices: string[] = params.price
    ? params.price.split("↕")
    : ["10", "1749"];
  filterStore.minPrice = +prices[0];
  filterStore.maxPrice = +prices[1];
  const stocks: string[] = params.stock
    ? params.stock.split("↕")
    : ["2", "150"];
  filterStore.minStock = +stocks[0];
  filterStore.maxStock = +stocks[1];
  filterStore.search = params.search ? params.search : "";
  filterStore.sort = params.sort ? params.sort : "";
  if (params.big) {
    filterStore.big = params.big;
  } else {
    filterStore.big = "true";
  }
};
