import { goodsData } from "../../data/goodsData";
import cartItem from "./cart-item";
// import { TGoodsData } from "../../types/types";
import { ICartItems } from "../../types/types";

export function createCart() {
  const linkForCart = <HTMLElement>document.querySelector(".basket__basket");
  linkForCart.removeEventListener("click", createCart);
  const main = <HTMLElement>document.querySelector(".main");
  main.style.display = "none";
  const header = <HTMLElement>document.querySelector(".header");

  // общий блок
  const productsBody = document.createElement("div");
  productsBody.classList.add("products__body", "__container");
  header.after(productsBody);

  //  БЛОК продуктов---------------------------------------------------
  const products = document.createElement("div");
  products.classList.add("products");
  productsBody.append(products);
  // название блока
  const productsTitle = document.createElement("h2");
  productsTitle.classList.add("products__title");
  productsTitle.innerHTML = "Items in the cart";
  products.append(productsTitle);
  // список добавленных товаров
  const productsItems = document.createElement("div");
  productsItems.classList.add("products__items");
  products.append(productsItems);
  // БЛОК цены общей и скидки-------------------------------------------
  const cost = document.createElement("div");
  cost.classList.add("cost");
  productsBody.append(cost);

  // вставка блочков с item
  const storage = JSON.parse(localStorage.getItem("cart-storage") || "");
  if (storage.length > 0) {
    const arrNumbers: number[] = [];
    storage.forEach((item: ICartItems) => {
      arrNumbers.push(item.id);
    });
    arrNumbers.forEach((item: number) => {
      for (let i = 0; i < goodsData.length; i += 1) {
        if (item === goodsData[i].id) {
          cartItem(goodsData[i]);
        }
      }
    });
  }
}