import IMask from "imask";

export const checkDate = () => {
  const month = document.querySelector(
    ".modal__card-footer-month"
  ) as HTMLInputElement;
  const error = document.querySelector(
    ".modal__card-footer-field_error"
  ) as HTMLDivElement;

  const maskOptions = {
    mask: "00/00",
  };
  IMask(month, maskOptions);

  month.addEventListener("change", () => {
    let flag = 0;

    const arr = month.value.split("/");

    if (+arr[0] > 12 || +arr[0] <= 0) {
      flag += 1;
    }

    if (arr.length < 2) {
      flag += 1;
    }

    if (flag === 0) {
      month.classList.add("successfully");
      month.classList.remove("fail");
      error.innerHTML = "";
    } else {
      month.classList.remove("successfully");
      month.classList.add("fail");
      error.innerHTML = "Invalid date";
    }
    if (month.value === "") {
      month.classList.remove("successfully");
      month.classList.remove("fail");
    }
  });
};
