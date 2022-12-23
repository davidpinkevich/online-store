import { changeView } from "./change-view";

export function changeViewItems(): void {
  const one = <HTMLButtonElement>document.querySelector(".search__change-one");
  const two = <HTMLButtonElement>document.querySelector(".search__change-two");

  // const lsStore = localStorage.getItem("view-items");
  one.addEventListener("click", () => {
    localStorage.setItem("view-items", "one");
    changeView();
  });
  two.addEventListener("click", () => {
    localStorage.setItem("view-items", "two");
    changeView();
  });
}
