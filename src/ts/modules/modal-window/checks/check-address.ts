export function checkAddress(): void {
  const input = <HTMLInputElement>(
    document.querySelector(".modal__body-address")
  );
  const error = <HTMLInputElement>(
    document.querySelector(".modal__body-address_error")
  );

  input.addEventListener("change", function () {
    const regExp = /([a-zA-Zа-яА-Я0-9]{5,}\s){2}[a-zA-Zа-яА-Я0-9]{5,}/;
    if (input.value.match(regExp)) {
      input.classList.remove("fail");
      input.classList.add("successfully");
      error.innerHTML = "";
    } else {
      input.classList.add("fail");
      input.classList.remove("successfully");
      error.innerHTML = "Invalid address";
    }
    if (input.value === "") {
      input.classList.remove("fail");
    }
  });
}
