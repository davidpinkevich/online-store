import { TGoodsData } from "../types/types";
import Product from "./create-item";
import { totalPrice } from "./cart/total-cost";
import { addAllAmount } from "./cart/total-amount";

export function createAllItems(items: TGoodsData[]): void {
  items.forEach((item) => {
    new Product(item).createItem(
      `/good/${item.id}`,
      <HTMLElement>document.querySelector(".main__items-body")
    );
  });
  const fullPrice = <HTMLElement>document.querySelector(".header__cost>span");
  const currItems = <HTMLElement>document.querySelector(".basket__basket");
  totalPrice(fullPrice);
  addAllAmount(currItems);
}

export const createGood = (item: TGoodsData) => {
  new Product(item).render();
  const fullPrice = <HTMLElement>document.querySelector(".header__cost>span");
  const currItems = <HTMLElement>document.querySelector(".basket__basket");
  totalPrice(fullPrice);
  addAllAmount(currItems);
};
