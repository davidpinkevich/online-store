export function changeView() {
  const nodeListItems: NodeListOf<HTMLElement> =
    document.querySelectorAll(".product");

  const body = <HTMLElement>document.querySelector(".main__items-body");

  if (localStorage.getItem("view-items") === "two") {
    nodeListItems.forEach((item: HTMLElement) => {
      item.classList.add("active");
      body.classList.add("active");
    });
  }
  if (localStorage.getItem("view-items") === "one") {
    nodeListItems.forEach((item: HTMLElement) => {
      item.classList.remove("active");
      body.classList.remove("active");
    });
  }
}
