import { ICartItems } from "../../types/types";
import { createCart } from "./cart-block";
import { itemCost } from "./item-cost";
import { totalPrice } from "./total-cost";
import { addAllAmount } from "./total-amount";
import { totalDiscountPrice } from "./total-discount";

function addItemCurrent(
  event: Event,
  btnAdd: HTMLButtonElement,
  btnRemove: HTMLButtonElement,
  amount: HTMLElement,
  allPriceForItem: HTMLElement
) {
  const lsCart = JSON.parse(localStorage.getItem("cart-storage") || "");
  const lsPromo = JSON.parse(localStorage.getItem("promo") || "");
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
  console.log(firstPromo, secondPromo, firstPercent, secondPercent);
  const newLs: ICartItems[] = [];
  const secondLs: ICartItems[] = [];
  const mainCost = <HTMLElement>document.querySelector(".header__cost>span");
  const currItems = <HTMLElement>document.querySelector(".basket__basket");
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
  lsCart.forEach((item: ICartItems) => {
    if (item.count > 0) {
      secondLs.push(item);
    }
  });
  localStorage.setItem("cart-storage", JSON.stringify(secondLs));
  if (secondLs.length !== newLs.length) createCart("RS", "2022", 30, 20);
  //------------------------------------------------------
}

export default addItemCurrent;
