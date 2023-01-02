import { IQueryCart } from "../../types/types";
import { createCart } from "./cart-block";

export function inputPage(queryCart: IQueryCart) {
  const lsCart = JSON.parse(localStorage.getItem("cart-storage") || "");
  const limit = <HTMLInputElement>(
    document.querySelector(".products__pug-input")
  );

  if (+limit.value <= 0 || limit.value === "") {
    queryCart.limit = lsCart.length;
    limit.value = "";
    return;
  } else if (limit.value > lsCart.length) {
    queryCart.limit = lsCart.length;
    limit.value = String(lsCart.length);
    return;
  } else {
    queryCart.limit = +limit.value;
    queryCart.page = 1;
    createCart("RS", "2022", 30, 20);
    return;
  }
}
