export function addAmountItems() {
  const amount = <HTMLElement>document.querySelector(".search__amount span");
  const total = document.querySelectorAll(".product").length;
  const body = <HTMLElement>document.querySelector(".main__items-body");
  amount.innerHTML = `${total}`;
  if (total === 0) {
    body.classList.add("not-found");
    body.innerHTML = "Items not found";
  } else {
    body.classList.remove("not-found");
  }
}
