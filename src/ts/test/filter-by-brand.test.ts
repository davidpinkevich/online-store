import { describe, expect, test } from "@jest/globals";
import { filterStore } from "../modules/filter/data/filter-store";
import { filterByBrand } from "../modules/filter/compose/filter-by-brand";

const testItems = [
  {
    id: 1,
    title: "iPhone 9",
    description: "",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "",
    images: [],
  },
];

describe("filtering by brand", () => {
  filterStore.brands = [];
  test("filtering when the brand is not selected", () => {
    expect(filterByBrand(testItems)).toEqual(testItems);
  });
});
