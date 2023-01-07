import { checkCvv } from "./checks/check-cvv";
import { checkDate } from "./checks/check-date";
import { checkName } from "./checks/check-name";
import { checkNumber } from "./checks/check-number";
import { checkAddress } from "./checks/check-address";
import { checkMail } from "./checks/mail";
import { checkCardNumber } from "./checks/card-number";
import { activateBtn } from "./checks/confirm";

export function createModalWindow(): void {
  const mod = document.createElement("div");
  mod.classList.add("modal");
  mod.innerHTML = `<form>
      <h2 class="modal__title">Personal data</h2>
      <div class="modal__body">
        <input type="text" class="modal__body-name" placeholder="Full name" required>
        <div class="modal__body-name_error"></div>
        <input type="tel" class="modal__body-phone" placeholder="Phone number" required>
        <div class="modal__body-phone_error"></div>
        <input type="text" class="modal__body-address" placeholder="Delivery address" required>
        <div class="modal__body-address_error"></div>
        <input type="email" class="modal__body-email" placeholder="E-mail" required>
        <div class="modal__body-email_error"></div>
      </div>
      <h2 class="modal__title-card">Credit card</h2>
      <div class="modal__card gold">
        <div class="modal__card-wrap">
          <input type="number" class="modal__card-number-one" required>
          <input type="number" class="modal__card-number-two" required>
          <input type="number" class="modal__card-number-three" required>
          <input type="number" class="modal__card-number-four" required>
        </div>
        <div class="modal__card-footer">
          <input class="modal__card-footer-month" placeholder="MM/YY" required>
          <input type="number" class="modal__card-footer-cvv" placeholder="CVV" required>
        </div>
      </div>
      <div class="modal__card-number_error"></div>
      <div class="modal__card-footer-field_error"></div>
      <div class="modal__card-footer-cvv_error"></div>
      <button class="modal__btn">CONFIRM</button>
      <div class="modal__error"></div>
      </form>`;
  document.body.after(mod);
  checkName();
  checkNumber();
  checkDate();
  checkCvv();
  checkAddress();
  checkMail();
  checkCardNumber();
  activateBtn();
  const shadow = <HTMLElement>document.querySelector("body");
  const btn = <HTMLElement>document.querySelector(".cost__body-buy");
  shadow.addEventListener("click", function (event) {
    if (event.target !== mod && event.target !== btn) {
      mod.remove();
      shadow.classList.remove("shadow");
    }
  });
}
