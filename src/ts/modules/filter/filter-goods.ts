import { goodsData } from "../../data/goods-data";
import { TGoodsData } from "../../types/types";
import { createAllItems } from "../add-all-items";
import { myCompose } from "./compose/compose";

export const filterGoods = () => {
  const data: TGoodsData[] = myCompose(goodsData);
  createAllItems(data);
};
