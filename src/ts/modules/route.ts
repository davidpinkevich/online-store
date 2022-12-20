import Navigo from "navigo";
import { goodsData } from "../data/goods-data";
import { TIdCheck } from "../types/types";
import { createAllItems, createGood } from "./add-all-items";
import { createCart } from "./cart/cart-block";
import changeMainPhoto from "./change-main-photo";
import {
  createBrandsCheckbox,
  createСategoriesCheckbox,
} from "./filter/create-checkbox";
import filterHandler from "./filter/filter-checbox";
import multiRange from "./filter/multi-range";
import { filterSearch } from "./filter/filter-search";

const router = new Navigo("/", { hash: true });

const root = document.querySelector("#root") as HTMLElement;

router
  .on("/", () => {
    root.innerHTML = `
    <div class="main __container">
    <div class="main__filter filter">
        <section class="filter__category">
            <h2 class="filter__category-title">Category</h2>
            <hr>
            <div class="filter__category-items category-items"></div>
        </section>
        <section class="filter__brand">
            <h2 class="filter__brand-title">Brand</h2>
            <hr>
            <div class="filter__brand-items brand-items"></div>
        </section>
        <section class="filter__stock">
            <h2 class="filter__stock-title">Stock</h2>
            <hr>
            <div class="slider">
            <div class="progress"></div>
        </div>

        <div class="range-input">
            <input type="range" class="range-min" id="stockMin" min="2" max="150" value="2">
            <input type="range" class="range-max" id="stockMax" min="2" max="150" value="150">
        </div>
        <div class="filter__stock-info">
            <div class="filter__stock-min">2</div>
            <div class="filter__stock-arrow">⟷</div>
            <div class="filter__stock-max">150</div>
        </div>
        </section>
        <section class="filter__price">
            <h2 class="filter__price-title">Price</h2>
            <hr>
            <div class="slider">
            <div class="progress"></div>
        </div>

        <div class="range-input">
            <input type="range" class="range-min" id="priceMin" min="10" max="1749" value="10">
            <input type="range" class="range-max" id="priceMax" min="10" max="1749" value="1749">
        </div>
        <div class="filter__price-info">
            <div class="filter__price-min">10</div>
            <div class="filter__price-arrow">⟷</div>
            <div class="filter__price-max">1749</div>
        </div>
        </section>
        <div class="filter__buttons button">
            <button class = "button__reset">Reset Filtres</button>
            <button class = "button__copy">Copy Link</button>
        </div>
    </div>
    <div class="main__items">
        <div class="main__items-search search">
            <div class="search__body"><input class ="search-input" type="text" placeholder="Search"></div>
        </div>
        <div class="main__items-body"></div>
    </div>
</div>
    `;
    createAllItems(goodsData);
    createBrandsCheckbox(goodsData);
    createСategoriesCheckbox(goodsData);
    filterHandler();
    multiRange();
    filterSearch();
  })
  .on("/good/:id", (q) => {
    const id: TIdCheck = q?.data?.id;
    root.innerHTML = `<div class="good __container"></div>`;
    if (id) {
      const num = +id;
      if (num > 100) {
        root.innerHTML = `
        <div class="error __container">
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
            alt="404 error" class="error__img">
        <h1>Not Found</h1>
        <h2>Good number ${id} does not exist</h2>
        <a href="/" class="error__link" data-navigo>Back to store</a>
    </div>
        `;
        return;
      }
      createGood(goodsData[num - 1]);
    }
    changeMainPhoto();
  })
  .on("/cart/", () => {
    createCart();
  })
  .notFound(() => {
    root.innerHTML = `
    <div class="error __container">
    <img src="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
        alt="404 error" class="error__img">
    <h1>Not Found</h1>
    <h2>This resource could not be Found on this server</h2>
    <a href="/" class="error__link" data-navigo>Back to store</a>
</div>
    `;
  })
  .resolve();
