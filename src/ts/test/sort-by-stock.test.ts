import { describe, expect, test } from "@jest/globals";
import { sortByStock } from "../modules/filter/compose/sort-by-stock";
import { filterStore } from "../modules/filter/data/filter-store";

describe("sort module", () => {
  filterStore.sort = "stock";
  const send = [
    {
      id: 6,
      title: "MacBook Pro",
      description: "",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      images: [],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description: "",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images: [],
    },
  ];
  test("sort stock from max to min", () => {
    expect(sortByStock(send)).toEqual([send[0], send[1]]);
  });
});
