import { checkAddress } from "./checks/phone-number";
import { checkMail } from "./checks/mail";
import { checkCardNumber } from "./checks/card-number";

export function createModalWindow(): void {
  const mod = document.createElement("div");
  mod.classList.add("modal");
  mod.innerHTML = `<form>
      <h2 class="modal__title">Personal data</h2>
      <div class="modal__body">
        <input type="text" class="modal__body-name" placeholder="Full name" required>
        <input type="number" class="modal__body-phone" placeholder="Phone number" required>
        <input type="text" class="modal__body-address" placeholder="Delivery address" required>
        <input type="email" class="modal__body-email" placeholder="E-mail" required>
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
          <input type="number" class="modal__card-footer-valid" placeholder="Date" required>
          <input type="number" class="modal__card-footer-cvv" placeholder="cvv" required>
        </div>
      </div>
      <button class="modal__btn">CONFIRM</button>
      </form>`;
  document.body.after(mod);
  checkAddress();
  checkMail();
  checkCardNumber();
}
