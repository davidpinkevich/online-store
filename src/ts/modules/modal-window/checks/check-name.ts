export const checkName = () => {
  const fullName = document.querySelector(
    ".modal__body-name"
  ) as HTMLInputElement;
  const error = document.querySelector(
    ".modal__body-name_error"
  ) as HTMLDivElement;

  fullName.addEventListener("change", () => {
    const arr: string[] = fullName.value.split(" ");
    let flag = 0;
    let textError = "";

    if (arr.length < 2) {
      flag += 1;
      textError = "Full name must be at least 2 words";
    }
    arr.forEach((word) => {
      if (word.length < 3) {
        flag += 1;
        textError = "Full name must contain at least 3 characters";
      }
      if (!/^[a-zа-я]+$/i.test(word)) {
        flag += 1;
        textError = "Full name must contain only letters";
      }
    });
    if (flag === 0) {
      fullName.classList.add("successfully");
      fullName.classList.remove("fail");
      error.innerHTML = "";
    } else {
      fullName.classList.add("fail");
      fullName.classList.remove("successfully");
      error.innerHTML = textError;
    }
    if (fullName.value === "") {
      fullName.classList.remove("successfully");
      fullName.classList.add("fail");
    }
  });
};
