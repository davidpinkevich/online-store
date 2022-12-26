import { filterGoods } from "../filter-goods";
import { addQueryString } from "../query/create-query-string";

const multiRange = () => {
  const rangeStock: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    ".filter__stock input"
  );
  const rangePrice: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    ".filter__price input"
  );
  const progressStock = document.querySelector(
    ".filter__stock .progress"
  ) as HTMLDivElement;
  const progressPrice = document.querySelector(
    ".filter__price .progress"
  ) as HTMLDivElement;
  const stockMin = document.querySelector(
    ".filter__stock-min"
  ) as HTMLDivElement;
  const stockMax = document.querySelector(
    ".filter__stock-max"
  ) as HTMLDivElement;
  const priceMin = document.querySelector(
    ".filter__price-min"
  ) as HTMLDivElement;
  const priceMax = document.querySelector(
    ".filter__price-max"
  ) as HTMLDivElement;

  rangeStock.forEach((input): void => {
    input.addEventListener("input", (e) => {
      const minValue: number = parseInt(rangeStock[0].value);
      const maxValue: number = parseInt(rangeStock[1].value);

      const stockGap = 5;
      const target = e.target as HTMLDivElement;
      const max: number = +rangeStock[1].max;

      if (maxValue - minValue < stockGap) {
        if (target.classList.contains("range-min")) {
          rangeStock[0].value = `${maxValue - stockGap}`;
        } else {
          rangeStock[1].value = `${minValue + stockGap}`;
        }
      } else {
        progressStock.style.left = (minValue / max) * 100 + "%";
        progressStock.style.right = 100 - (maxValue / max) * 100 + "%";
      }

      stockMin.textContent = rangeStock[0].value;
      stockMax.textContent = rangeStock[1].value;

      addQueryString("stock", `${rangeStock[0].value}↕${rangeStock[1].value}`);

      filterGoods();
    });
  });

  rangePrice.forEach((input): void => {
    input.addEventListener("input", (e) => {
      const minValue: number = parseInt(rangePrice[0].value);
      const maxValue: number = parseInt(rangePrice[1].value);

      const priceGap = 50;
      const target = e.target as HTMLDivElement;
      const max: number = +rangePrice[1].max;

      if (maxValue - minValue < priceGap) {
        if (target.classList.contains("range-min")) {
          rangePrice[0].value = `${maxValue - priceGap}`;
        } else {
          rangePrice[1].value = `${minValue + priceGap}`;
        }
      } else {
        progressPrice.style.left = (minValue / max) * 100 + "%";
        progressPrice.style.right = 100 - (maxValue / max) * 100 + "%";
      }

      priceMin.textContent = rangePrice[0].value;
      priceMax.textContent = rangePrice[1].value;

      addQueryString("price", `${rangePrice[0].value}↕${rangePrice[1].value}`);

      filterGoods();
    });
  });
};

export default multiRange;
