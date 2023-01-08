import { describe, expect, test } from "@jest/globals";
import { sortByPriceMax } from "../modules/filter/compose/sort-by-price-max";
import { filterStore } from "../modules/filter/data/filter-store";
const testItems = [
  {
    id: 24,
    title: "cereals muesli fruit nuts",
    description: "",
    price: 46,
    discountPercentage: 16.8,
    rating: 4.94,
    stock: 113,
    brand: "fauji",
    category: "groceries",
    thumbnail: "",
    images: [],
  },
  {
    id: 27,
    title: "Flying Wooden Bird",
    description: "",
    price: 51,
    discountPercentage: 15.58,
    rating: 4.41,
    stock: 17,
    brand: "Flying Wooden",
    category: "home-decoration",
    thumbnail: "",
    images: [],
  },
  {
    id: 31,
    title: "Mornadi Velvet Bed",
    description: "",
    price: 40,
    discountPercentage: 17,
    rating: 4.16,
    stock: 140,
    brand: "Furniture Bed Set",
    category: "furniture",
    thumbnail: "",
    images: [],
  },
];
const result = [testItems[2], testItems[0], testItems[1]];
describe("sort 3 items", () => {
  filterStore.sort = "pricemax";
  test("sort from min price to max price", () => {
    expect(sortByPriceMax(testItems)).toEqual(result);
  });
});
