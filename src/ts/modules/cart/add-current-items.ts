import { ICartItems } from "../../types/types";

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
      if (miniItem.id === curr) {
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
      if (miniItem.id === curr) {
        miniItem.count--;
        amount.innerHTML = `Items: <span>${miniItem.count}</span>`;
        newLs.push(miniItem);
      } else {
        newLs.push(miniItem);
      }
    });
    localStorage.setItem("cart-storage", JSON.stringify(newLs));
  }
  //------------------------------------------------------
}

export default addItemCurrent;
