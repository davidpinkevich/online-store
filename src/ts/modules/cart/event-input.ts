import { addDiscount } from "./discount";
import { totalDiscountPrice } from "./total-discount";

export function addEventInput(
  firstPromo: string,
  secondPromo: string,
  firstPercent: number,
  secondPercent: number
) {
  const lsPromo = JSON.parse(localStorage.getItem("promo") || "");
  const body = <HTMLElement>document.querySelector(".cost__body");
  const input = <HTMLInputElement>document.querySelector(".cost__body-promo");
  const oldPrice = <HTMLElement>(
    document.querySelector(".cost__body-price .cost__body-price-amount")
  );

  addDiscount(firstPromo, secondPromo, firstPercent, secondPercent);
  const newCost = <HTMLElement>document.querySelector(".total__promo");
  const discCost = <HTMLElement>(
    document.querySelector(".total__promo .cost__body-price-amount")
  );

  if (lsPromo[firstPromo] === true || lsPromo[secondPromo] === true) {
    newCost.style.display = "flex";
  } else {
    oldPrice.style.textDecoration = "none";
  }
  const btnAddF = document.createElement("button");
  btnAddF.classList.add("cost__body-promo-add-f");
  btnAddF.innerHTML = `Use promo for <span>${firstPercent}%</span>`;
  btnAddF.style.display = "none";
  body.append(btnAddF);

  const btnAddS = document.createElement("button");
  btnAddS.classList.add("cost__body-promo-add-s");
  btnAddS.innerHTML = `Use promo for <span>${secondPercent}%</span>`;
  btnAddS.style.display = "none";
  body.append(btnAddS);

  const btnInfoPromoFirst = document.createElement("div");
  btnInfoPromoFirst.classList.add("cost__body-promo-info-f", "promo");
  btnInfoPromoFirst.innerHTML = `<div class='promo__add'><span>Discount:</span> ${firstPercent}%</div><div class='promo__remove'>remove</div>`;
  btnInfoPromoFirst.style.display = "none";
  body.append(btnInfoPromoFirst);
  const firstDelete = <HTMLElement>(
    document.querySelector(".cost__body-promo-info-f .promo__remove")
  );

  const btnInfoPromoSecond = document.createElement("div");
  btnInfoPromoSecond.classList.add("cost__body-promo-info-s", "promo");
  btnInfoPromoSecond.innerHTML = `<div class='promo__add'><span>Discount:</span> ${secondPercent}%</div><div class='promo__remove'>remove</div>`;
  btnInfoPromoSecond.style.display = "none";
  body.append(btnInfoPromoSecond);
  const secondDelete = <HTMLElement>(
    document.querySelector(".cost__body-promo-info-s .promo__remove")
  );

  if (lsPromo[firstPromo] === true) {
    btnInfoPromoFirst.style.display = "flex";
  }
  if (lsPromo[secondPromo] === true) {
    btnInfoPromoSecond.style.display = "flex";
  }

  input.addEventListener("input", () => {
    if (input.value === firstPromo || input.value === secondPromo) {
      if (input.value === firstPromo) {
        btnAddF.style.display = "flex";
        input.classList.add("true");
      }
      if (input.value === secondPromo) {
        btnAddS.style.display = "flex";
        input.classList.add("true");
      }
    } else {
      btnAddF.style.display = "none";
      btnAddS.style.display = "none";
      input.classList.remove("true");
    }
    if (lsPromo[firstPromo] === true) {
      btnAddF.style.display = "none";
    }
    if (lsPromo[secondPromo] === true) {
      btnAddS.style.display = "none";
    }
  });

  // события на кнопки добавления промов:
  btnAddF.addEventListener("click", () => {
    lsPromo[firstPromo] = true;
    localStorage.setItem("promo", JSON.stringify(lsPromo));
    btnAddF.style.display = "none";
    btnInfoPromoFirst.style.display = "flex";
    newCost.style.display = "flex";
    totalDiscountPrice(
      discCost,
      firstPromo,
      secondPromo,
      firstPercent,
      secondPercent
    );
  });

  btnAddS.addEventListener("click", () => {
    lsPromo[secondPromo] = true;
    localStorage.setItem("promo", JSON.stringify(lsPromo));
    btnAddS.style.display = "none";
    btnInfoPromoSecond.style.display = "flex";
    newCost.style.display = "flex";
    totalDiscountPrice(
      discCost,
      firstPromo,
      secondPromo,
      firstPercent,
      secondPercent
    );
  });
  //----------------------------------

  // события на кнопки для удаления промов
  firstDelete.addEventListener("click", () => {
    lsPromo[firstPromo] = false;
    localStorage.setItem("promo", JSON.stringify(lsPromo));
    btnInfoPromoFirst.style.display = "none";
    totalDiscountPrice(
      discCost,
      firstPromo,
      secondPromo,
      firstPercent,
      secondPercent
    );
    if (lsPromo[firstPromo] === false && lsPromo[secondPromo] === false) {
      newCost.style.display = "none";
      oldPrice.style.textDecoration = "none";
    }
  });

  secondDelete.addEventListener("click", () => {
    lsPromo[secondPromo] = false;
    localStorage.setItem("promo", JSON.stringify(lsPromo));
    btnInfoPromoSecond.style.display = "none";
    totalDiscountPrice(
      discCost,
      firstPromo,
      secondPromo,
      firstPercent,
      secondPercent
    );
    if (lsPromo[firstPromo] === false && lsPromo[secondPromo] === false) {
      newCost.style.display = "none";
      oldPrice.style.textDecoration = "none";
    }
  });
}
