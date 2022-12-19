const rangeStock: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  ".filter__stock input"
);
const priceStock: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  ".filter__price input"
);
const progressStock = document.querySelector(
  ".filter__stock .progress"
) as HTMLDivElement;
const progressPrice = document.querySelector(
  ".filter__price .progress"
) as HTMLDivElement;
const stockMin = document.querySelector(".filter__stock-min") as HTMLDivElement;
const stockMax = document.querySelector(".filter__stock-max") as HTMLDivElement;
const priceMin = document.querySelector(".filter__price-min") as HTMLDivElement;
const priceMax = document.querySelector(".filter__price-max") as HTMLDivElement;

const stockGap = 5;
const priceGap = 50;

rangeStock.forEach((input): void => {
  input.addEventListener("input", (e) => {
    const minValue: number = parseInt(rangeStock[0].value);
    const maxValue: number = parseInt(rangeStock[1].value);

    const target = e.target as HTMLDivElement;

    if (maxValue - minValue < stockGap) {
      if (target.classList.contains("range-min")) {
        rangeStock[0].value = `${maxValue - stockGap}`;
      } else {
        rangeStock[1].value = `${minValue + stockGap}`;
      }
    } else {
      console.log(progressStock);
      progressStock.style.left = (minValue / 150) * 100 + "%";
      progressStock.style.right = 100 - (maxValue / 150) * 100 + "%";
    }

    stockMin.textContent = rangeStock[0].value;
    stockMax.textContent = rangeStock[1].value;
  });
});

priceStock.forEach((input): void => {
  input.addEventListener("input", (e) => {
    const minValue: number = parseInt(priceStock[0].value);
    const maxValue: number = parseInt(priceStock[1].value);

    const target = e.target as HTMLDivElement;

    if (maxValue - minValue < priceGap) {
      if (target.classList.contains("range-min")) {
        priceStock[0].value = `${maxValue - priceGap}`;
      } else {
        priceStock[1].value = `${minValue + priceGap}`;
      }
    } else {
      console.log(progressStock);
      progressPrice.style.left = (minValue / 1749) * 100 + "%";
      progressPrice.style.right = 100 - (maxValue / 1749) * 100 + "%";
    }

    priceMin.textContent = priceStock[0].value;
    priceMax.textContent = priceStock[1].value;
  });
});
