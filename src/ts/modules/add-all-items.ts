import { TGoodsData } from "../types/types";
import Product from "./create-item";
import { mainCost } from "./total-cost";

export function createAllItems(items: TGoodsData[]): void {
  items.forEach((item) => {
    new Product(item).createItem(
      `/good/${item.id}`,
      <HTMLElement>document.querySelector(".main__items-body")
    );
  });
  mainCost();
}

export const createGood = (item: TGoodsData) => {
  new Product(item).render();
  mainCost();
};
