export const checkAllInputs = () => {
  const fullName = document.querySelector(
    ".modal__body-name"
  ) as HTMLInputElement;
  const fullNameError = document.querySelector(
    ".modal__body-name_error"
  ) as HTMLDivElement;

  const phoneNumber = document.querySelector(
    ".modal__body-phone"
  ) as HTMLInputElement;
  const phoneNumberError = document.querySelector(
    ".modal__body-phone_error"
  ) as HTMLDivElement;

  const address = <HTMLInputElement>(
    document.querySelector(".modal__body-address")
  );
  const addressError = <HTMLInputElement>(
    document.querySelector(".modal__body-address_error")
  );

  const mail = <HTMLInputElement>document.querySelector(".modal__body-email");
  const mailError = <HTMLInputElement>(
    document.querySelector(".modal__body-email_error")
  );

  const cardOne = <HTMLInputElement>(
    document.querySelector(".modal__card-number-one")
  );
  const cardTwo = <HTMLInputElement>(
    document.querySelector(".modal__card-number-two")
  );
  const cardThree = <HTMLInputElement>(
    document.querySelector(".modal__card-number-three")
  );
  const cardFour = <HTMLInputElement>(
    document.querySelector(".modal__card-number-four")
  );
  const cardError = <HTMLDivElement>(
    document.querySelector(".modal__card-number_error")
  );

  const month = document.querySelector(
    ".modal__card-footer-month"
  ) as HTMLInputElement;
  const fieldError = document.querySelector(
    ".modal__card-footer-field_error"
  ) as HTMLDivElement;

  const cvv = document.querySelector(
    ".modal__card-footer-cvv"
  ) as HTMLInputElement;
  const cvvError = document.querySelector(
    ".modal__card-footer-cvv_error"
  ) as HTMLDivElement;

  if (fullName.value === "") {
    fullName.classList.add("fail");
    fullName.classList.remove("successfully");
    fullNameError.innerHTML = "Invalid name";
  }

  if (phoneNumber.value === "") {
    phoneNumber.classList.remove("successfully");
    phoneNumber.classList.add("fail");
    phoneNumberError.innerHTML = "Invalid phone number";
  }

  if (address.value === "") {
    address.classList.add("fail");
    address.classList.remove("successfully");
    addressError.innerHTML = "Invalid address";
  }

  if (mail.value === "") {
    mail.classList.add("fail");
    mail.classList.remove("successfully");
    mailError.innerHTML = "Invalid address";
  }

  if (cardOne.value === "") {
    cardOne.classList.add("fail");
    cardOne.classList.remove("successfully");
    cardError.innerHTML = "Invalid card number";
  }

  if (cardTwo.value === "") {
    cardTwo.classList.add("fail");
    cardTwo.classList.remove("successfully");
    cardError.innerHTML = "Invalid card number";
  }

  if (cardThree.value === "") {
    cardThree.classList.add("fail");
    cardThree.classList.remove("successfully");
    cardError.innerHTML = "Invalid card number";
  }

  if (cardFour.value === "") {
    cardFour.classList.add("fail");
    cardFour.classList.remove("successfully");
    cardError.innerHTML = "Invalid card number";
  }

  if (month.value === "") {
    month.classList.remove("successfully");
    month.classList.add("fail");
    fieldError.innerHTML = "Invalid date";
  }

  if (cvv.value === "") {
    cvv.classList.remove("successfully");
    cvv.classList.add("fail");
    cvvError.innerHTML = "Invalid cvv";
  }
};
