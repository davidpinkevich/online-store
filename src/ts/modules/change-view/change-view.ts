import { filterStore } from "../filter/data/filter-store";

export function changeView() {
  const nodeListItems: NodeListOf<HTMLElement> =
    document.querySelectorAll(".product");

  const body = <HTMLElement>document.querySelector(".main__items-body");

  if (filterStore.big === "true") {
    nodeListItems.forEach((item: HTMLElement) => {
      item.classList.remove("active");
      body.classList.remove("active");
    });
  }

  if (filterStore.big === "false") {
    nodeListItems.forEach((item: HTMLElement) => {
      item.classList.add("active");
      body.classList.add("active");
    });
  }
}
