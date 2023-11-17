export const checkNumber = () => {
  const phoneNumber = document.querySelector(
    ".modal__body-phone"
  ) as HTMLInputElement;
  const error = document.querySelector(
    ".modal__body-phone_error"
  ) as HTMLDivElement;

  phoneNumber.addEventListener("change", () => {
    let flag = 0;
    let textError = "";

    if (phoneNumber.value[0] !== "+") {
      flag += 1;
      textError = "The number must start with a plus";
    }

    if (phoneNumber.value.trim().length < 10) {
      flag += 1;
      textError = "Invalid number";
    }

    if (!/^[0-9]+$/i.test(phoneNumber.value.slice(1))) {
      flag += 1;
      textError = "The number must contain only numbers";
    }

    if (flag === 0) {
      phoneNumber.classList.remove("fail");
      phoneNumber.classList.add("successfully");
      error.innerHTML = "";
    } else {
      phoneNumber.classList.remove("successfully");
      phoneNumber.classList.add("fail");
      error.innerHTML = textError;
    }
    if (phoneNumber.value === "") {
      phoneNumber.classList.remove("successfully");
      phoneNumber.classList.remove("fail");
    }
  });
};
