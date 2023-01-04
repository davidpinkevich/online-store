export const checkName = () => {
  const fullName = document.querySelector(
    ".modal__body-name"
  ) as HTMLInputElement;

  fullName.addEventListener("change", () => {
    const arr: string[] = fullName.value.split(" ");
    let flag = 0;

    if (arr.length < 2) {
      flag += 1;
    }
    arr.forEach((word) => {
      const upper = word.toUpperCase();
      if (!(upper[0] === word[0])) {
        flag += 1;
      }
      if (word.length < 3) {
        flag += 1;
      }
      if (!/^[a-z]+$/i.test(word)) {
        flag += 1;
      }
    });
    if (flag === 0) {
      fullName.classList.add("successfully");
      fullName.classList.remove("fail");
    } else {
      fullName.classList.add("fail");
      fullName.classList.remove("successfully");
    }
    if (fullName.value === "") {
      fullName.classList.remove("successfully");
      fullName.classList.remove("fail");
    }
  });
};
