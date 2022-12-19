import Navigo from "navigo";
import { goodsData } from "../data/goodsData";
import { createAllItems, createGood } from "./add-all-items";
import { createCart } from "./cart/cart-block";
import changeMainPhoto from "./change-main-photo";

const router = new Navigo("/", { hash: true });

const root = document.querySelector("#root") as HTMLElement;

router
  .on("/", () => {
    root.innerHTML = `
    <div class="main __container">
    <div class="main__filter filter">
        <section class="filter__category">
            <h2 class="filter__category-title">Category</h2>
            <div class="filter__category-items category-items">
                <label><input type="checkbox" name="category">test1</label>
                <label><input type="checkbox" name="category">test2</label>
                <label><input type="checkbox" name="category">test3</label>
                <label><input type="checkbox" name="category">test4</label>
            </div>
        </section>
        <section class="filter__brand">
            <h2 class="filter__brand-title">Brand</h2>
            <div class="filter__brand-items brand-items">
                <label><input type="checkbox" name="brand">test5</label>
                <label><input type="checkbox" name="brand">test6</label>
                <label><input type="checkbox" name="brand">test7</label>
                <label><input type="checkbox" name="brand">test8</label>
            </div>
        </section>
        <section class="filter__stock">
            <h2 class="filter__stock-title">Stock</h2>
            <input class = "filter__stock-range" type="range" min = "0" max = "100">
        </section>
        <section class="filter__price">
            <h2 class="filter__price-title">Price</h2>
            <input class = "filter__price-range" type="range" min = "0" max = "100">
        </section>
        <div class="filter__buttons button">
            <button class = "button__reset">Reset Filtres</button>
            <button class = "button__copy">Copy Link</button>
        </div>
    </div>
    <div class="main__items">
        <div class="main__items-search">Доп поиск</div>
        <div class="main__items-body"></div>
    </div>
</div>
    `;
    createAllItems(goodsData);
  })
  .on("/good/:id", (q) => {
    const id = q?.data?.id;
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
