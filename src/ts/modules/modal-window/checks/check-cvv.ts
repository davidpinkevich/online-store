export const checkCvv = () => {
  const cvv = document.querySelector(
    ".modal__card-footer-cvv"
  ) as HTMLInputElement;

  cvv.addEventListener("input", () => {
    let flag = 0;

    if (cvv.value.length > 3) {
      cvv.value = cvv.value.slice(0, 3);
    }

    if (cvv.value.length < 3) {
      flag += 1;
    }

    if (flag === 0) {
      cvv.classList.add("successfully");
      cvv.classList.remove("fail");
    } else {
      cvv.classList.remove("successfully");
      cvv.classList.add("fail");
    }
    if (cvv.value === "") {
      cvv.classList.remove("successfully");
      cvv.classList.remove("fail");
    }
  });
};
