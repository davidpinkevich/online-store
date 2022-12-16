import changeMainPhoto from "./modules/changeMainPhoto";
import { createAllItems } from "./modules/add-all-items";
import { goodsData } from "./data/goodsData";

import "../sass/main.scss";

changeMainPhoto();
createAllItems(goodsData);
