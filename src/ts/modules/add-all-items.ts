import { TGoodsData } from "../types/types";
import Product from "./create-item";
import { totalPrice } from "./cart/total-cost";

export function createAllItems(items: TGoodsData[]): void {
  items.forEach((item) => {
    new Product(item).createItem(
      `/good/${item.id}`,
      <HTMLElement>document.querySelector(".main__items-body")
    );
  });
  const fullPrice = <HTMLElement>document.querySelector(".header__cost>span");
  totalPrice(fullPrice);
}

export const createGood = (item: TGoodsData) => {
  new Product(item).render();
  const fullPrice = <HTMLElement>document.querySelector(".header__cost>span");
  totalPrice(fullPrice);
};
