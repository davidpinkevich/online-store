import { describe, expect, test } from "@jest/globals";
import { filterStore } from "../modules/filter/data/filter-store";
import { filterByCategory } from "../modules/filter/compose/filter-by-category";

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
  {
    id: 9,
    title: "Infinix INBOOK",
    description: "",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "",
    images: [],
  },
];

describe("filtering by category", () => {
  filterStore.categories = ["laptops"];
  test("filtering when the category is laptops", () => {
    expect(filterByCategory(testItems)).toEqual([testItems[1]]);
  });
});
