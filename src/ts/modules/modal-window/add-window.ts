import { checkCvv } from "./checks/check-cvv";
import { checkDate } from "./checks/check-date";
import { checkName } from "./checks/check-name";
import { checkNumber } from "./checks/check-number";

export function createModalWindow(): void {
  const mod = document.createElement("div");
  mod.classList.add("modal");
  mod.innerHTML = `<h2 class="modal__title">Personal data</h2>
      <div class="modal__body">
        <input type="text" class="modal__body-name" placeholder="Full name">
        <input type="tel" class="modal__body-phone" placeholder="Phone number">
        <input type="text" class="modal__body-address" placeholder="Delivery address">
        <input type="email" class="modal__body-email" placeholder="E-mail">
      </div>
      <h2 class="modal__title-card">Credit card</h2>
      <div class="modal__card">
        <input type="number" class="modal__card-number" placeholder="Card number">
        <div class="modal__card-footer">
          <input type="number" min="1" max="12" class="modal__card-footer-month" placeholder="Month">
          <input type="number" class="modal__card-footer-year" placeholder="Year">
          <input type="number" class="modal__card-footer-cvv" placeholder="cvv">
        </div>
      </div>
      <button class="modal__btn">CONFIRM</button>`;
  document.body.after(mod);
  checkName();
  checkNumber();
  checkDate();
  checkCvv();
}
