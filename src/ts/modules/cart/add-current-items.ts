import { ICartItems } from "../../types/types";
import { createCart } from "./cart-block";
import { itemCost } from "./item-cost";
import { totalPrice } from "./total-cost";
import { addAllAmount } from "./total-amount";
import { totalDiscountPrice } from "./total-discount";
import { addNumberPage } from "./page-number";
import { queryCart } from "./data/cart-store";
import { readQueryString } from "../filter/query/read-query-string";
import { addQueryForCart } from "./query/create-query-cart";

function addItemCurrent(
  event: Event,
  btnAdd: HTMLButtonElement,
  btnRemove: HTMLButtonElement,
  amount: HTMLElement,
  allPriceForItem: HTMLElement
) {
  const lsCart = JSON.parse(localStorage.getItem("cart-storage") || "");
  const lsPromo = JSON.parse(localStorage.getItem("promo") || "");
  // проверка на наличие на странице item, чтобы пагинация сдвинулась влево
  const lengthItems = lsCart.length;
  const numberItem = <HTMLElement>(
    document.querySelector(".cart-item__buttons-info-current > span")
  );
  const numberItems: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".cart-item__buttons-info-current > span"
  );
  const lenItems = Array.from(numberItems).length;
  //-----------------------------------------------

  const discCost = <HTMLElement>(
    document.querySelector(".total__promo .cost__body-price-amount")
  );
  const oldPrice = <HTMLElement>(
    document.querySelector(".cost__body-price .cost__body-price-amount")
  );
  const firstPromo = Object.keys(lsPromo)[0];
  const secondPromo = Object.keys(lsPromo)[1];
  const firstPercent = lsPromo["discOne"];
  const secondPercent = lsPromo["discTwo"];
  const newLs: ICartItems[] = [];
  const secondLs: ICartItems[] = [];
  const mainCost = <HTMLElement>document.querySelector(".header__cost>span");
  const currItems = <HTMLElement>(
    document.querySelector(".basket__basket-amount")
  );
  const mainCurrentRight = <HTMLElement>(
    document.querySelector(".cost__body-items-current")
  );
  const mainCostRight = <HTMLElement>(
    document.querySelector(".cost__body-price-amount")
  );
  //-----------добавление----------------------------
  if (event.target === btnAdd) {
    const curr = Number(btnAdd.parentElement?.getAttribute("id"));
    lsCart.forEach((miniItem: ICartItems) => {
      if (miniItem.id === curr && miniItem.count < miniItem.stock) {
        miniItem.count++;
        itemCost(miniItem, allPriceForItem);
        amount.innerHTML = `Items: <span>${miniItem.count}</span>`;
        newLs.push(miniItem);
      } else {
        newLs.push(miniItem);
      }
    });
    localStorage.setItem("cart-storage", JSON.stringify(newLs));
    totalPrice(mainCost);
    addAllAmount(currItems);
    totalPrice(mainCostRight);
    addAllAmount(mainCurrentRight);
    totalDiscountPrice(
      discCost,
      firstPromo,
      secondPromo,
      firstPercent,
      secondPercent
    );
    if (lsPromo[firstPromo] === false && lsPromo[secondPromo] === false) {
      oldPrice.style.textDecoration = "none";
    }
  }
  //----------удаление--------------------------------
  if (event.target === btnRemove) {
    const curr = Number(btnRemove.parentElement?.getAttribute("id"));
    lsCart.forEach((miniItem: ICartItems) => {
      if (miniItem.id === curr && miniItem.count > 0) {
        totalPrice(mainCost);
        miniItem.count--;
        itemCost(miniItem, allPriceForItem);
        amount.innerHTML = `Items: <span>${miniItem.count}</span>`;
        newLs.push(miniItem);
      } else {
        newLs.push(miniItem);
      }
    });
    localStorage.setItem("cart-storage", JSON.stringify(newLs));
    totalPrice(mainCost);
    addAllAmount(currItems);
    totalPrice(mainCostRight);
    addAllAmount(mainCurrentRight);
    addNumberPage(queryCart);
    totalDiscountPrice(
      discCost,
      firstPromo,
      secondPromo,
      firstPercent,
      secondPercent
    );
    if (lsPromo[firstPromo] === false && lsPromo[secondPromo] === false) {
      oldPrice.style.textDecoration = "none";
    }

    if (
      lengthItems >= 1 &&
      queryCart.page > 1 &&
      Number(numberItem.innerHTML) <= 1 &&
      lenItems <= 1
    ) {
      queryCart.page -= 1;
      addQueryForCart("page", String(queryCart.page));
      readQueryString();
      createCart("RS", "2022", 30, 20);
    }
  }
  lsCart.forEach((item: ICartItems) => {
    if (item.count > 0) {
      secondLs.push(item);
    }
  });
  addNumberPage(queryCart);
  localStorage.setItem("cart-storage", JSON.stringify(secondLs));
  if (secondLs.length !== newLs.length) createCart("RS", "2022", 30, 20);
  createCart("RS", "2022", 30, 20);
  //------------------------------------------------------
}

export default addItemCurrent;
