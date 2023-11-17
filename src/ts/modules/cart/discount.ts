import { totalDiscountPrice } from "./total-discount";

export function addDiscount(
  fPromo: string,
  sPromo: string,
  firstDiscount: number,
  secondDiscount: number
) {
  const costBody = <HTMLElement>document.querySelector(".cost__body-price");
  const totalAmount = document.createElement("div");
  totalAmount.classList.add("cost__body-price", "total__promo");

  const totalItemsPrice = document.createElement("p");
  totalItemsPrice.classList.add("cost__body-price-total");
  totalItemsPrice.innerHTML = "New amount:";

  const totalItemsAmount = document.createElement("p");
  totalItemsAmount.classList.add("cost__body-price-amount");
  const dollar = document.createElement("p");
  dollar.innerHTML = "$";
  totalAmount.append(totalItemsPrice);
  totalAmount.append(totalItemsAmount);
  totalAmount.append(dollar);
  totalDiscountPrice(
    totalItemsAmount,
    fPromo,
    sPromo,
    firstDiscount,
    secondDiscount
  );
  costBody.after(totalAmount);
  totalAmount.style.display = "none";
}
