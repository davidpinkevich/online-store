import { ICartItems } from "../../types/types";
// import { createCart } from "./cart-block";

function addItemCurrent(
  event: Event,
  btnAdd: HTMLButtonElement,
  btnRemove: HTMLButtonElement,
  amount: HTMLElement
) {
  const lsCart = JSON.parse(localStorage.getItem("cart-storage") || "");
  const newLs: ICartItems[] = [];
  //-----------добавление----------------------------
  if (event.target === btnAdd) {
    const curr = Number(btnAdd.parentElement?.getAttribute("id"));
    lsCart.forEach((miniItem: ICartItems) => {
      if (miniItem.id === curr && miniItem.count < miniItem.stock) {
        miniItem.count++;
        amount.innerHTML = `Items: <span>${miniItem.count}</span>`;
        newLs.push(miniItem);
      } else {
        newLs.push(miniItem);
      }
    });
    localStorage.setItem("cart-storage", JSON.stringify(newLs));
  }
  //----------удаление--------------------------------
  if (event.target === btnRemove) {
    const curr = Number(btnRemove.parentElement?.getAttribute("id"));
    lsCart.forEach((miniItem: ICartItems) => {
      if (miniItem.id === curr && miniItem.count > 0) {
        miniItem.count--;
        amount.innerHTML = `Items: <span>${miniItem.count}</span>`;
        newLs.push(miniItem);
      } else {
        newLs.push(miniItem);
        // const kek = <HTMLElement>document.getElementById(`${curr}`);
        // const lol = <HTMLElement>kek.parentElement;
        // lol.remove();
      }
    });
    localStorage.setItem("cart-storage", JSON.stringify(newLs));
  }
  //------------------------------------------------------
}

export default addItemCurrent;
