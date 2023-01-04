export function checkMail(): void {
  const input = <HTMLInputElement>document.querySelector(".modal__body-email");

  input.addEventListener("change", function () {
    const regExp = /^[a-zA-Z0-9]{1,}\@[a-zA-Z]{1,}\.[a-zA-Z]{0,}[a-z]$/;
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
