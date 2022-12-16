import { TGoodsData } from "../types/types";
import Product from "./create-item";

export function createAllItems(items: TGoodsData[]): void {
  items.forEach((item) => {
    new Product(item).rendore(
      `/good/${item.id}`,
      <HTMLElement>document.querySelector(".main__items-body")
    );
  });
}

export const createGood = (item: TGoodsData) => {
  new Product(item).render();
};
