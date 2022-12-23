import { filterStore } from "./filter-store";
import { filterGoods } from "./filter-goods";

export function sortPrice(): void {
  const inputRating = <HTMLButtonElement>(
    document.querySelector(".search__btn-rating")
  );
  const inputPrice = <HTMLButtonElement>(
    document.querySelector(".search__btn-price")
  );
  const inputStock = <HTMLButtonElement>(
    document.querySelector(".search__btn-stock")
  );
  inputPrice.addEventListener("click", () => {
    filterStore.price = true;
    filterStore.rating = false;
    filterStore.stock = false;

    inputRating.classList.remove("active");
    inputRating.disabled = false;

    inputPrice.classList.add("active");
    inputPrice.disabled = true;

    inputStock.classList.remove("active");
    inputStock.disabled = false;

    filterGoods();
  });
}
