import Navigo from "navigo";
import { goodsData } from "../data/goods-data";
import { TIdCheck } from "../types/types";
import { createGood } from "./add-all-items";
import { createCart } from "./cart/cart-block";
import changeMainPhoto from "./change-main-photo";
import {
  createBrandsCheckbox,
  createСategoriesCheckbox,
} from "./filter/checkbox/create-checkbox";
import filterHandler from "./filter/checkbox/filter-checbox";
import multiRange from "./filter/range/multi-range";
import { filterSearch } from "./filter/search/filter-search";
import { sortRatingMax } from "./filter/sort/sort-rating-max";
import { sortRatingMin } from "./filter/sort/sort-rating-min";
import { sortPriceMax } from "./filter/sort/sort-price-max";
import { sortPriceMin } from "./filter/sort/sort-price-min";
import { changeViewItems } from "./change-view/ls-change-for-view";
import { changeView } from "./change-view/change-view";
import { filterGoods } from "./filter/filter-goods";
import { activeFilters } from "./filter/active-filters";
import { addAmountItems } from "./filter/amount/amount-items";
import { copyURL } from "./filter/controls/copy";
import { resetQuery } from "./filter/controls/reset";

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
            <button class = "button__reset">Reset</button>
            <button class = "button__copy">Copy</button>
        </div>
    </div>
    <div class="main__items">
        <div class="main__items-search search">
            <div class="search__btn">
                <button class="search__btn-rating-max">to max rating</button>
                <button class="search__btn-rating-min">to min rating</button>
                <button class="search__btn-price-max">to max price</button>
                <button class="search__btn-price-min">to min price</button>
            </div>
            <p class="search__amount">Products found: <span>0</span></p>
            <div class="search__body"><input class ="search-input" type="text" placeholder="Search"></div>
            <div class="search__change">
                <div class="search__change-one"></div>
                <div class="search__change-two"></div>
            </div>
        </div>
        <div class="main__items-body"></div>
    </div>
</div>
    `;
    createBrandsCheckbox(goodsData);
    createСategoriesCheckbox(goodsData);
    filterHandler();
    multiRange();
    filterSearch();
    sortRatingMax();
    sortRatingMin();
    sortPriceMax();
    sortPriceMin();
    activeFilters();
    filterGoods();
    changeViewItems();
    changeView();
    addAmountItems();
    copyURL();
    resetQuery();
  })
  .on("/good/:id", (q) => {
    const id: TIdCheck = q?.data?.id;
    root.innerHTML = `<div class="good __container"></div>`;
    if (id) {
      const num = +id;
      if (num <= 0 || num > 100 || isNaN(num)) {
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
    createCart("RS", "2022", 30, 20);
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
