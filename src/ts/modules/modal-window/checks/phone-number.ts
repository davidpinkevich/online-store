export function checkAddress(): void {
  const input = <HTMLInputElement>(
    document.querySelector(".modal__body-address")
  );

  input.addEventListener("change", function () {
    const regExp = /([a-zA-Zа-яА-Я]{5,}\s){2}[a-zA-Zа-яА-Я]{5,}/;
    if (input.value.match(regExp)) {
      input.classList.remove("fail");
      input.classList.add("successfully");
    } else {
      input.classList.add("fail");
      input.classList.remove("successfully");
    }
    if (input.value === "") {
      input.classList.remove("fail");
    }
  });
}
