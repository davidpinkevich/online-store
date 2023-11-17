import { queryCart } from "../data/cart-store";

export function readQueryStringCart() {
  const search = new URLSearchParams(window.location.search);
  const option = Object.fromEntries(search.entries());
  if (option.limit) {
    queryCart.limit = Number(option.limit);
  }
  if (option.page) {
    queryCart.page = Number(option.page);
  }
}
