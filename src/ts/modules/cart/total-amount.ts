import { ICartItems } from "../../types/types";

export function addAllAmount(path: HTMLElement): void {
  const lsCart: ICartItems[] | null = JSON.parse(
    localStorage.getItem("cart-storage") || ""
  );
  let numb = 0;
  lsCart?.forEach((item: ICartItems) => {
    numb += item.count;
  });
  path.innerHTML = `${numb}`;
}
