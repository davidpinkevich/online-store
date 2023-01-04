export const checkDate = () => {
  const month = document.querySelector(
    ".modal__card-footer-month"
  ) as HTMLInputElement;
  const year = document.querySelector(
    ".modal__card-footer-year"
  ) as HTMLInputElement;
  const error = document.querySelector(
    ".modal__card-footer-field_error"
  ) as HTMLDivElement;

  month.addEventListener("input", () => {
    if (month.value.length > 2) {
      month.value = month.value.slice(0, 2);
    }
  });

  month.addEventListener("change", () => {
    let flag = 0;

    if (+month.value > 12 || +month.value < 1) {
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

  year.addEventListener("input", () => {
    if (year.value.length > 2) {
      year.value = year.value.slice(0, 2);
    }
  });

  year.addEventListener("change", () => {
    let flag = 0;

    if (year.value.length < 2) {
      flag += 1;
    }

    if (flag === 0) {
      year.classList.add("successfully");
      year.classList.remove("fail");
      error.innerHTML = "";
    } else {
      year.classList.remove("successfully");
      year.classList.add("fail");
      error.innerHTML = "Invalid date";
    }
    if (year.value === "") {
      year.classList.remove("successfully");
      year.classList.remove("fail");
    }
  });
};
