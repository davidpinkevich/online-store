export const checkCvv = () => {
  const cvv = document.querySelector(
    ".modal__card-footer-cvv"
  ) as HTMLInputElement;
  const error = document.querySelector(
    ".modal__card-footer-cvv_error"
  ) as HTMLDivElement;

  cvv.addEventListener("input", () => {
    if (cvv.value.length > 3) {
      cvv.value = cvv.value.slice(0, 3);
    }
  });

  cvv.addEventListener("change", () => {
    let flag = 0;
    let textError = "";

    if (cvv.value.length < 3) {
      flag += 1;
      textError = "CVV must be 3 characters";
    }

    if (flag === 0) {
      cvv.classList.add("successfully");
      cvv.classList.remove("fail");
      error.innerHTML = "";
    } else {
      cvv.classList.remove("successfully");
      cvv.classList.add("fail");
      error.innerHTML = textError;
    }
    if (cvv.value === "") {
      cvv.classList.remove("successfully");
      cvv.classList.remove("fail");
    }
  });
};
