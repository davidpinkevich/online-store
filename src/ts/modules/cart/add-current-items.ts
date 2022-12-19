import { ICartItems } from "../../types/types";
import { createCart } from "./cart-block";
import { itemCost } from "./item-cost";
import { totalPrice } from "./total-cost";
import { addAllAmount } from "./total-amount";

function addItemCurrent(
  event: Event,
  btnAdd: HTMLButtonElement,
  btnRemove: HTMLButtonElement,
  amount: HTMLElement,
  allPriceForItem: HTMLElement
) {
  const lsCart = JSON.parse(localStorage.getItem("cart-storage") || "");
  const newLs: ICartItems[] = [];
  const secondLs: ICartItems[] = [];
  const mainCost = <HTMLElement>document.querySelector(".header__cost>span");
  const currItems = <HTMLElement>document.querySelector(".basket__basket");
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
  }
  lsCart.forEach((item: ICartItems) => {
    if (item.count > 0) {
      secondLs.push(item);
    }
  });
  localStorage.setItem("cart-storage", JSON.stringify(secondLs));
  if (secondLs.length !== newLs.length) createCart();
  //------------------------------------------------------
}

export default addItemCurrent;
