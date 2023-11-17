import { describe, expect, test } from "@jest/globals";
import { filterByStock } from "../modules/filter/compose/filter-by-stock";
import { filterStore } from "../modules/filter/data/filter-store";

describe("filter module", () => {
  filterStore.minStock = 62;
  filterStore.maxStock = 114;
  const send = [
    {
      id: 11,
      title: "perfume Oil",
      description: "",
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      images: [],
    },
    {
      id: 12,
      title: "Brown Perfume",
      description: "",
      price: 40,
      discountPercentage: 15.66,
      rating: 4,
      stock: 52,
      brand: "Royal_Mirage",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      images: [],
    },
    {
      id: 13,
      title: "Fog Scent Xpressio Perfume",
      description: "",
      price: 13,
      discountPercentage: 8.14,
      rating: 4.59,
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      images: [],
    },
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
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      images: [],
    },
    {
      id: 15,
      title: "Eau De Perfume Spray",
      description: "",
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      images: [],
    },
  ];
  const expected = [
    {
      id: 11,
      title: "perfume Oil",
      description: "",
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      images: [],
    },
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
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      images: [],
    },
    {
      id: 15,
      title: "Eau De Perfume Spray",
      description: "",
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      images: [],
    },
  ];
  test("filter stock from 62 to 114", () => {
    expect(filterByStock(send)).toEqual(expected);
  });
});
