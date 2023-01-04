export const checkNumber = () => {
  const phoneNumber = document.querySelector(
    ".modal__body-phone"
  ) as HTMLInputElement;

  phoneNumber.addEventListener("change", () => {
    let flag = 0;

    if (phoneNumber.value[0] !== "+") {
      flag += 1;
    }

    if (phoneNumber.value.trim().length < 10) {
      flag += 1;
    }

    if (!/^[0-9]+$/i.test(phoneNumber.value.slice(1))) {
      flag += 1;
    }

    if (flag === 0) {
      phoneNumber.classList.remove("fail");
      phoneNumber.classList.add("successfully");
    } else {
      phoneNumber.classList.remove("successfully");
      phoneNumber.classList.add("fail");
    }
    if (phoneNumber.value === "") {
      phoneNumber.classList.remove("successfully");
      phoneNumber.classList.remove("fail");
    }
  });
};
