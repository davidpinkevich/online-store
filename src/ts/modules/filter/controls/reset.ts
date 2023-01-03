export const resetQuery = () => {
  const resetBtn = document.querySelector(
    ".button__reset"
  ) as HTMLButtonElement;

  resetBtn.addEventListener("click", () => {
    location.search = "";
  });
};
