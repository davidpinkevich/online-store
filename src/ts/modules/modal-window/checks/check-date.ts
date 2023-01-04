export const checkDate = () => {
  const month = document.querySelector(
    ".modal__card-footer-month"
  ) as HTMLInputElement;
  const year = document.querySelector(
    ".modal__card-footer-year"
  ) as HTMLInputElement;

  month.addEventListener("input", () => {
    let flag = 0;

    if (month.value.length > 2) {
      month.value = month.value.slice(0, 2);
    }

    if (+month.value > 12 || +month.value < 1) {
      flag += 1;
    }

    if (flag === 0) {
      month.classList.add("successfully");
      month.classList.remove("fail");
    } else {
      month.classList.remove("successfully");
      month.classList.add("fail");
    }
    if (month.value === "") {
      month.classList.remove("successfully");
      month.classList.remove("fail");
    }
  });

  year.addEventListener("input", () => {
    let flag = 0;

    if (year.value.length > 2) {
      year.value = year.value.slice(0, 2);
    }

    if (year.value.length < 2) {
      flag += 1;
    }

    if (flag === 0) {
      year.classList.add("successfully");
      year.classList.remove("fail");
    } else {
      year.classList.remove("successfully");
      year.classList.add("fail");
    }
    if (year.value === "") {
      year.classList.remove("successfully");
      year.classList.remove("fail");
    }
  });
};
