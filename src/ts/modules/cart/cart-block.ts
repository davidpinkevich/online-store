import { goodsData } from "../../data/goods-data";
import cartItem from "./cart-item";
import { ICartItems } from "../../types/types";
import { totalPrice } from "./total-cost";
import { addAllAmount } from "./total-amount";

export function createCart() {
  const main = <HTMLElement>document.getElementById("root");
  const storage = JSON.parse(localStorage.getItem("cart-storage") || "");
  main.innerHTML = "";
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
    const productsTitle = document.createElement("h2");
    productsTitle.classList.add("products__title");
    productsTitle.innerHTML = "Items in the cart";
    products.append(productsTitle);
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
    // общая цена в хедере--------------------------
    const fullPrice = <HTMLElement>document.querySelector(".header__cost>span");
    totalPrice(fullPrice);
    // общее кол-во товаров в хедере + заблочим нажатие на корзину
    const currItems = <HTMLElement>document.querySelector(".basket__basket");
    currItems.style.pointerEvents = "none";
    addAllAmount(currItems);
    // вставка блочков с item
    if (storage.length > 0) {
      const arrNumbers: number[] = [];
      storage.forEach((item: ICartItems) => {
        arrNumbers.push(item.id);
      });
      arrNumbers.forEach((item: number) => {
        for (let i = 0; i < goodsData.length; i += 1) {
          if (item === goodsData[i].id) {
            cartItem(goodsData[i]);
          }
        }
      });
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
