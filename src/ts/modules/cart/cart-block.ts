import { goodsData } from "../../data/goods-data";
import cartItem from "./cart-item";
import { ICartItems } from "../../types/types";
import { totalPrice } from "./total-cost";
import { addAllAmount } from "./total-amount";
import { addEventInput } from "./event-input";
import { queryCart } from "./data/cart-store";
import { inputPage } from "./input-pag";
import { addNumberPage } from "./page-number";
import { readQueryStringCart } from "./query/read-query-cart";
import { createModalWindow } from "../modal-window/add-window";

export function createCart(
  fPromo: string,
  sPromo: string,
  fPerc: number,
  sPerc: number
) {
  const main = <HTMLElement>document.getElementById("root");
  const storage = JSON.parse(localStorage.getItem("cart-storage") || "");
  main.innerHTML = "";
  readQueryStringCart();
  if (storage.length > 0) {
    // общий блок
    const productsBody = document.createElement("div");
    productsBody.classList.add("products__body", "__container");
    main.append(productsBody);

    //  БЛОК продуктов---------------------------------------------------
    const products = document.createElement("div");
    products.classList.add("products");
    productsBody.append(products);
    // название блока
    const productsTitle = document.createElement("div");
    productsTitle.classList.add("products__title");

    const productsTitleText = document.createElement("h2");
    productsTitleText.innerHTML = "Items in the cart";
    productsTitle.append(productsTitleText);

    const productsTitlePug = document.createElement("div");
    productsTitlePug.classList.add("products__pug");
    productsTitle.append(productsTitlePug);

    const productsTitleInput = document.createElement("input");
    productsTitleInput.type = "number";
    productsTitleInput.classList.add("products__pug-input");
    productsTitlePug.append(productsTitleInput);
    productsTitleInput.addEventListener("input", function () {
      inputPage(queryCart);
    });
    productsTitleInput.value = String(queryCart.limit);

    const productsTitlePages = document.createElement("div");
    productsTitlePages.classList.add("products__pug-pages");
    productsTitlePages.innerHTML = `<div class="page-left"><span>L</span></div><span></span><div class="page-right"><span>R</span></div>`;
    productsTitlePug.append(productsTitlePages);

    products.append(productsTitle);
    addNumberPage(queryCart);

    const numberPage = <HTMLElement>(
      document.querySelector(".products__pug-pages>span")
    );
    numberPage.innerHTML = `${queryCart.page}`;
    // список добавленных товаров
    const productsItems = document.createElement("div");
    productsItems.classList.add("products__items");
    products.append(productsItems);
    // БЛОК цены общей и скидки-------------------------------------------
    const cost = document.createElement("div");
    cost.classList.add("cost");
    productsBody.append(cost);

    const costTitle = document.createElement("p");
    costTitle.classList.add("cost__title");
    costTitle.innerHTML = "In Total";
    cost.append(costTitle);

    const costBody = document.createElement("div");
    costBody.classList.add("cost__body");
    cost.append(costBody);

    // всего товаров
    const totalItems = document.createElement("div");
    totalItems.classList.add("cost__body-items");

    const totalItemsScore = document.createElement("p");
    totalItemsScore.classList.add("cost__body-items-score");
    totalItemsScore.innerHTML = "Total goods:";
    const totalItemsCurrent = document.createElement("p");
    totalItemsCurrent.classList.add("cost__body-items-current");
    totalItems.append(totalItemsScore);
    totalItems.append(totalItemsCurrent);
    addAllAmount(totalItemsCurrent);
    costBody.append(totalItems);
    // общая цена в правом блоке
    const totalAmount = document.createElement("div");
    totalAmount.classList.add("cost__body-price");

    const totalItemsPrice = document.createElement("p");
    totalItemsPrice.classList.add("cost__body-price-total");
    totalItemsPrice.innerHTML = "Total amount:";

    const totalItemsAmount = document.createElement("p");
    totalItemsAmount.classList.add("cost__body-price-amount");
    const dollar = document.createElement("p");
    dollar.innerHTML = "$";
    totalAmount.append(totalItemsPrice);
    totalAmount.append(totalItemsAmount);
    totalAmount.append(dollar);
    totalPrice(totalItemsAmount);
    costBody.append(totalAmount);
    // вставка поля для ввода промокода
    const inputPromo = document.createElement("input");
    inputPromo.classList.add("cost__body-promo");
    inputPromo.type = "text";
    inputPromo.placeholder = "Enter promocode (RS, 2022)";
    costBody.append(inputPromo);
    // вставка кнопки для покупки
    const btnBuy = document.createElement("button");
    btnBuy.classList.add("cost__body-buy");
    btnBuy.innerHTML = "BUY";
    costBody.append(btnBuy);
    btnBuy.addEventListener("click", function () {
      createModalWindow();
      document.body.classList.add("shadow");
    });
    // добавляе в ls промы
    const lsPromo = localStorage.getItem("promo");
    const objPromo = {
      [fPromo]: false,
      [sPromo]: false,
      discOne: fPerc,
      discTwo: sPerc,
    };
    if (!lsPromo) localStorage.setItem("promo", JSON.stringify(objPromo));
    addEventInput(fPromo, sPromo, fPerc, sPerc);
    // общая цена в хедере--------------------------
    const fullPrice = <HTMLElement>document.querySelector(".header__cost>span");
    totalPrice(fullPrice);
    // общее кол-во товаров в хедере + заблочим нажатие на корзину
    const currItems = <HTMLElement>(
      document.querySelector(".basket__basket-amount")
    );
    const currItemsBlock = <HTMLElement>(
      document.querySelector(".basket__basket")
    );
    currItemsBlock.style.pointerEvents = "none";
    addAllAmount(currItems);

    // проверка на пагинацию
    // вставка блочков с item
    if (storage.length > 0) {
      const arrNumbers: number[] = [];
      storage.forEach((item: ICartItems) => {
        arrNumbers.push(item.id);
      });
      // arrNumbers - это массив с номерами id
      if (queryCart.page === 1) {
        for (let i = 0; i < +queryCart.limit; i++) {
          for (let j = 0; j < goodsData.length; j += 1) {
            if (arrNumbers[i] === goodsData[j].id) {
              cartItem(goodsData[j]);
            }
          }
        }
      } else {
        const test = queryCart.page * queryCart.limit;
        for (let i = test - queryCart.limit; i < +test; i++) {
          for (let j = 0; j < goodsData.length; j += 1) {
            if (arrNumbers[i] === goodsData[j].id) {
              cartItem(goodsData[j]);
            }
          }
        }
      }
    }
  } else {
    const productsBody = document.createElement("div");
    productsBody.classList.add(
      "products__body",
      "__container",
      "products__body-empty"
    );
    productsBody.innerHTML = "Cart is currently empty, add something";
    main.append(productsBody);
  }
}
