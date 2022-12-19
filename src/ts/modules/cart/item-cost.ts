import { ICartItems } from "../../types/types";

export function itemCost(item: ICartItems, price: HTMLElement): void {
  let amount = 0;
  amount = item.count * item.price;

  if (amount < 999) {
    price.innerHTML = `Price <span>${amount} $</span>`;
  }
  if (amount > 999) {
    price.innerHTML = `Price <span>${String(amount)[0]}.${String(amount).slice(
      1
    )} $</span>`;
  }
  if (amount > 9999) {
    price.innerHTML = `All <span>${String(amount).slice(0, 2)}.${String(
      amount
    ).slice(1, -1)} $</span>`;
  }
  // if (localStorage.getItem("cart-storage")) {
  //   const lsCart: ICartItems[] | null = JSON.parse(
  //     localStorage.getItem("cart-storage") || ""
  //   );
  //   const cost = <HTMLElement>document.querySelector(".header__cost>span");
  //   if (lsCart) {
  //     let amount = 0;
  //     lsCart.forEach((item: ICartItems) => {
  //       amount += item.price;
  //     });
  //     if (amount < 999) {
  //       cost.innerHTML = `${amount}`;
  //     }
  //     if (amount > 999) {
  //       cost.innerHTML = `${String(amount)[0]}.${String(amount).slice(1)}`;
  //     }
  //     if (amount > 9999) {
  //       cost.innerHTML = `${String(amount).slice(0, 2)}.${String(amount).slice(
  //         1,
  //         -1
  //       )}`;
  //     }
  //   }
  // }
}
