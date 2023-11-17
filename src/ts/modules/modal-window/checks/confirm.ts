import { confirmForm } from "../confirm-btn";
import { checkAllInputs } from "./check-all-inputs";

export const activateBtn = () => {
  const confirmBtn = document.querySelector(".modal__btn") as HTMLButtonElement;

  confirmBtn.addEventListener("click", (e) => {
    const successfullyEl: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".successfully");

    if (successfullyEl.length === 10) {
      e.preventDefault();
      confirmForm(e);
    } else {
      checkAllInputs();
    }
  });
};
