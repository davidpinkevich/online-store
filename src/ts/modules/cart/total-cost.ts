import { ICartItems } from "../../types/types";

export function totalPrice(price: HTMLElement): void {
  if (localStorage.getItem("cart-storage")) {
    const lsCart: ICartItems[] | null = JSON.parse(
      localStorage.getItem("cart-storage") || ""
    );
    if (lsCart) {
      let amount = 0;
      lsCart.forEach((item: ICartItems) => {
        amount += item.price * item.count;
      });
      if (amount < 999) {
        price.innerHTML = `${amount}`;
      }
      if (amount > 999) {
        price.innerHTML = `${String(amount)[0]}.${String(amount).slice(1)}`;
      }
      if (amount > 9999) {
        price.innerHTML = `${String(amount).slice(0, 2)}.${String(amount).slice(
          1,
          -1
        )}`;
      }
      if (amount === 0) {
        price.innerHTML = "0.00";
      }
    }
  }
}
