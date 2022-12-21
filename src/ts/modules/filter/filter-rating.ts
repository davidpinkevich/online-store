import { filterStore } from "./filter-store";
import { filterGoods } from "./filter-goods";

export function filterRating(): void {
  const inputRating = <HTMLButtonElement>(
    document.querySelector(".search__btn-rating")
  );
  inputRating.addEventListener("click", () => {
    filterStore.rating = true;
    inputRating.classList.add("active");
    inputRating.disabled = true;
    filterGoods();
  });
}
