import { TGoodsData } from "../../types/types";
import Checkbox from "./Checkbox";

export const createBrandsCheckbox = (data: TGoodsData[]): void => {
  const set: Set<string> = new Set(data.map((brand) => brand.brand).sort());
  const brands: string[] = Array.from(set);
  brands.forEach((brand: string) => {
    new Checkbox(brand, ".filter__brand .brand-items").render();
  });
};

export const createСategoriesCheckbox = (data: TGoodsData[]): void => {
  const set: Set<string> = new Set(data.map((brand) => brand.category).sort());
  const categories: string[] = Array.from(set);
  categories.forEach((brand: string) => {
    new Checkbox(brand, ".filter__category .category-items").render();
  });
};
