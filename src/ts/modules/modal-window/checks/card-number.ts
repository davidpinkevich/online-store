export function checkCardNumber(): void {
  const cart = <HTMLElement>document.querySelector(".modal__card");
  const one = <HTMLInputElement>(
    document.querySelector(".modal__card-number-one")
  );

  const two = <HTMLInputElement>(
    document.querySelector(".modal__card-number-two")
  );

  const three = <HTMLInputElement>(
    document.querySelector(".modal__card-number-three")
  );

  const four = <HTMLInputElement>(
    document.querySelector(".modal__card-number-four")
  );

  one.addEventListener("input", function () {
    const text = one.value.slice(0, 4);
    if (one.value.length >= 4) {
      one.value = text;
      two.focus();
    }
    if (one.value[0] === "4") {
      cart.classList.add("visa");
      cart.classList.remove("gold");
    } else if (one.value[0] === "5") {
      cart.classList.add("ms");
      cart.classList.remove("gold");
    } else if (one.value[0] === "3") {
      cart.classList.add("ae");
      cart.classList.remove("gold");
    } else {
      cart.classList.add("gold");
      cart.classList.remove("visa");
      cart.classList.remove("ms");
      cart.classList.remove("ae");
    }
  });

  two.addEventListener("input", function () {
    const text = two.value.slice(0, 4);
    if (two.value.length >= 4) {
      two.value = text;
      three.focus();
    }
  });

  three.addEventListener("input", function () {
    const text = three.value.slice(0, 4);
    if (three.value.length >= 4) {
      three.value = text;
      four.focus();
    }
  });

  four.addEventListener("input", function () {
    const text = four.value.slice(0, 4);
    if (four.value.length >= 4) {
      four.value = text;
    }
  });

  one.addEventListener("change", function () {
    if (one.value.length === 4) {
      one.classList.add("successfully");
    } else {
      one.classList.remove("successfully");
      one.classList.add("fail");
    }
  });

  two.addEventListener("change", function () {
    if (two.value.length === 4) {
      two.classList.add("successfully");
    } else {
      two.classList.remove("successfully");
      two.classList.add("fail");
    }
  });

  three.addEventListener("change", function () {
    if (three.value.length === 4) {
      three.classList.add("successfully");
    } else {
      three.classList.remove("successfully");
      three.classList.add("fail");
    }
  });

  four.addEventListener("change", function () {
    if (four.value.length === 4) {
      four.classList.add("successfully");
    } else {
      four.classList.remove("successfully");
      four.classList.add("fail");
    }
  });
}
