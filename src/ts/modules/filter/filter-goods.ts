import { goodsData } from "../../data/goods-data";
import { TGoodsData } from "../../types/types";
import { createAllItems } from "../add-all-items";
import { myCompose } from "./compose/compose";
import { dataExclusion } from "./data-exclusion";
import { readQueryString } from "./query/read-query-string";
import { addAmountItems } from "./amount/amount-items";
import { rangeExclusion } from "./data-range";

export const filterGoods = () => {
  readQueryString();
  const data: TGoodsData[] = myCompose(goodsData);

  dataExclusion(data);
  rangeExclusion(data);
  // очищаем блок на каждое действие и отрисовывем
  const body = <HTMLElement>document.querySelector(".main__items-body");
  body.innerHTML = "";
  createAllItems(data);
  addAmountItems();
};
