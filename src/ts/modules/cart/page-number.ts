import { createCart } from "./cart-block";
import { IQueryCart } from "../../types/types";

export function addNumberPage(queryCart: IQueryCart) {
  const lsCart = JSON.parse(localStorage.getItem("cart-storage") || "");

  const pageLeft = <HTMLDivElement>document.querySelector(".page-left");
  const pageRight = <HTMLDivElement>document.querySelector(".page-right");
  // переключение между страницами
  pageRight.addEventListener("click", function () {
    if (queryCart.page * queryCart.limit >= lsCart.length) {
      pageRight.style.pointerEvents = "none";
    } else {
      queryCart.page += 1;
      createCart("RS", "2022", 30, 20);
    }
  });
  pageLeft.addEventListener("click", function () {
    if (queryCart.page === 1) {
      pageLeft.style.pointerEvents = "none";
    } else {
      queryCart.page -= 1;
      createCart("RS", "2022", 30, 20);
    }
  });
  //----------------------------
}
