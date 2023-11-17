import { describe, expect, test } from "@jest/globals";
import { filterStore } from "../modules/filter/data/filter-store";
import { filterByPrice } from "../modules/filter/compose/filter-by-price";

const testItems = [
  {
    id: 14,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description: "",
    price: 120,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    thumbnail: "",
    images: [],
  },
  {
    id: 18,
    title: "Oil Free Moisturizer 100ml",
    description: "",
    price: 40,
    discountPercentage: 13.1,
    rating: 4.56,
    stock: 88,
    brand: "Dermive",
    category: "skincare",
    thumbnail: "",
    images: [],
  },
];

describe("filtering by price", () => {
  filterStore.minPrice = 100;
  filterStore.maxPrice = 130;
  test("filtering when the price 100-130", () => {
    expect(filterByPrice(testItems)).toEqual([testItems[0]]);
  });
});
