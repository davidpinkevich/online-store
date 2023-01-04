import { checkAllInputs } from "./check-all-inputs";

export const activateBtn = () => {
  const confirmBtn = document.querySelector(".modal__btn") as HTMLButtonElement;
  const modalError = document.querySelector(".modal__error") as HTMLDivElement;

  confirmBtn.addEventListener("click", (e) => {
    const successfullyEl: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".successfully");

    console.log(successfullyEl.length);
    if (successfullyEl.length === 11) {
      e.preventDefault();
      modalError.innerHTML = "";
    } else {
      checkAllInputs();
      modalError.innerHTML = "Invalid data";
    }
  });
};
