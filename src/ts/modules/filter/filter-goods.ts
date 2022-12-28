import { goodsData } from "../../data/goods-data";
import { TGoodsData } from "../../types/types";
import { createAllItems } from "../add-all-items";
import { myCompose } from "./compose/compose";
import { dataEXclusion } from "./data-exclusion";
import { readQueryString } from "./query/read-query-string";

export const filterGoods = () => {
  readQueryString();
  const data: TGoodsData[] = myCompose(goodsData);
  dataEXclusion(data);
  // очищаем блок на каждое действие и отрисовывем
  const body = <HTMLElement>document.querySelector(".main__items-body");
  body.innerHTML = "";
  createAllItems(data);
};
