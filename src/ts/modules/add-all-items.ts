import { TGoodsData } from "../types/types";
import Product from "./create-item";
import { totalPrice } from "./cart/total-cost";
import { addAllAmount } from "./cart/total-amount";
import { changeView } from "./change-view/change-view";

export function createAllItems(items: TGoodsData[]): void {
  items.forEach((item) => {
    new Product(item).createItem(
      `${window.location.search ? "#" : ""}/good/${item.id}`,
      <HTMLElement>document.querySelector(".main__items-body")
    );
  });
  const fullPrice = <HTMLElement>document.querySelector(".header__cost>span");
  const currItems = <HTMLElement>(
    document.querySelector(".basket__basket-amount")
  );
  totalPrice(fullPrice);
  addAllAmount(currItems);
  changeView();

  // добавляем в ls инфу о внешнем виде всех блоков
  if (!localStorage.getItem("cart-storage")) {
    localStorage.setItem("cart-storage", "[]");
  }
}

export const createGood = (item: TGoodsData) => {
  new Product(item).render();
  const fullPrice = <HTMLElement>document.querySelector(".header__cost>span");
  const currItems = <HTMLElement>(
    document.querySelector(".basket__basket-amount")
  );
  totalPrice(fullPrice);
  addAllAmount(currItems);
};
