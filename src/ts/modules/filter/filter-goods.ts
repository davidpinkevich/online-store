import { goodsData } from "../../data/goods-data";
import { TGoodsData } from "../../types/types";
import { createAllItems } from "../add-all-items";
import { myCompose } from "./compose/compose";

export const filterGoods = () => {
  const data: TGoodsData[] = myCompose(goodsData);
  // очищаем блок на каждое действие и отрисовывем
  const body = <HTMLElement>document.querySelector(".main__items-body");
  body.innerHTML = "";
  createAllItems(data);
};
