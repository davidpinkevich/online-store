import { IQueryCart } from "../../types/types";
import { createCart } from "./cart-block";
import { addQueryForCart } from "./query/create-query-cart";
import { readQueryStringCart } from "./query/read-query-cart";

export function inputPage(queryCart: IQueryCart) {
  const lsCart = JSON.parse(localStorage.getItem("cart-storage") || "");
  const limit = <HTMLInputElement>(
    document.querySelector(".products__pug-input")
  );
  readQueryStringCart();
  if (+limit.value <= 0 || limit.value === "") {
    queryCart.limit = lsCart.length;
    limit.value = "";
    addQueryForCart("limit", String(queryCart.limit));
    readQueryStringCart();
    return;
  } else if (limit.value > lsCart.length) {
    queryCart.limit = lsCart.length;
    limit.value = String(lsCart.length);
    addQueryForCart("limit", String(queryCart.limit));
    readQueryStringCart();
    return;
  } else {
    queryCart.limit = +limit.value;
    queryCart.page = 1;
    addQueryForCart("limit", String(queryCart.limit));
    readQueryStringCart();
    createCart("RS", "2022", 30, 20);
    return;
  }
}
