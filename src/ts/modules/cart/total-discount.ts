import { ICartItems } from "../../types/types";

export function totalDiscountPrice(
  price: HTMLElement,
  fPromo: string,
  sPromo: string,
  firstPercent: number,
  secondPercent: number
): void {
  const lsDisc = JSON.parse(localStorage.getItem("promo") || "");
  const oldPrice = <HTMLElement>(
    document.querySelector(".cost__body-price .cost__body-price-amount")
  );
  let numb = 0;
  if (lsDisc[fPromo] === true) {
    numb += firstPercent / 100;
  }
  if (lsDisc[sPromo] === true) {
    numb += secondPercent / 100;
  }
  if (localStorage.getItem("cart-storage")) {
    const lsCart: ICartItems[] | null = JSON.parse(
      localStorage.getItem("cart-storage") || ""
    );

    if (lsCart) {
      let amount = 0;
      lsCart.forEach((item: ICartItems) => {
        amount += Math.floor(
          item.price * item.count - numb * (item.price * item.count)
        );
      });
      if (amount < 999) {
        price.innerHTML = `${amount}`;
        oldPrice.style.textDecoration = "line-through";
      }
      if (amount > 999) {
        price.innerHTML = `${String(amount)[0]}.${String(amount).slice(1)}`;
        oldPrice.style.textDecoration = "line-through";
      }
      if (amount > 9999) {
        price.innerHTML = `${String(amount).slice(0, 2)}.${String(amount).slice(
          1,
          -1
        )}`;
        oldPrice.style.textDecoration = "line-through";
      }
      if (amount === 0) {
        price.innerHTML = "0.00";
      }
    }
  }
}
