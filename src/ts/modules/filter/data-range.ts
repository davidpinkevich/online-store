import { TGoodsData } from "../../types/types";

export function rangeExclusion(data: TGoodsData[]): void {
  const arrStock: number[] = [];
  data.forEach((item: TGoodsData) => {
    arrStock.push(item.stock);
  });

  const arrPrice: number[] = [];
  data.forEach((item: TGoodsData) => {
    arrPrice.push(item.price);
  });
  // для Stock
  const stockMin = Math.min(...arrStock);
  const stockMax = Math.max(...arrStock);

  const rangeStockMin = <HTMLInputElement>document.getElementById("stockMin");
  const rangeStockMax = <HTMLInputElement>document.getElementById("stockMax");

  const arrowStock = <HTMLElement>(
    document.querySelector(".filter__stock-arrow")
  );
  const textStockMin = <HTMLElement>(
    document.querySelector(".filter__stock-min")
  );
  const textStockMax = <HTMLElement>(
    document.querySelector(".filter__stock-max")
  );
  if (isFinite(stockMin) || isFinite(stockMax)) {
    rangeStockMin.value = String(stockMin);
    rangeStockMax.value = String(stockMax);

    textStockMin.innerHTML = `${stockMin}`;
    textStockMax.innerHTML = `${stockMax}`;
    arrowStock.innerHTML = "⟷";
  } else {
    rangeStockMin.value = String(2);
    rangeStockMax.value = String(150);

    textStockMin.innerHTML = "";
    textStockMax.innerHTML = "";
    arrowStock.innerHTML = "not found";
  }
  // для Price
  const priceMin = Math.min(...arrPrice);
  const priceMax = Math.max(...arrPrice);

  const rangePriceMin = <HTMLInputElement>document.getElementById("priceMin");
  const rangePriceMax = <HTMLInputElement>document.getElementById("priceMax");
  const textPriceMin = <HTMLElement>(
    document.querySelector(".filter__price-min")
  );
  const textPriceMax = <HTMLElement>(
    document.querySelector(".filter__price-max")
  );
  const arrowPrice = <HTMLElement>(
    document.querySelector(".filter__price-arrow")
  );

  if (isFinite(priceMin) || isFinite(priceMax)) {
    rangePriceMin.value = String(priceMin);
    rangePriceMax.value = String(priceMax);

    textPriceMin.innerHTML = `${priceMin}`;
    textPriceMax.innerHTML = `${priceMax}`;
    arrowPrice.innerHTML = "⟷";
  } else {
    rangePriceMin.value = String(10);
    rangePriceMax.value = String(1749);

    textPriceMin.innerHTML = "";
    textPriceMax.innerHTML = "";
    arrowPrice.innerHTML = "not found";
  }

  const progressStock = document.querySelector(
    ".filter__stock .progress"
  ) as HTMLDivElement;
  const progressPrice = document.querySelector(
    ".filter__price .progress"
  ) as HTMLDivElement;

  progressStock.style.left = (stockMin / +rangeStockMax.max) * 100 + "%";
  progressStock.style.right = 100 - (stockMax / +rangeStockMax.max) * 100 + "%";

  progressPrice.style.left = (priceMin / +rangePriceMax.max) * 100 + "%";
  progressPrice.style.right = 100 - (priceMax / +rangePriceMax.max) * 100 + "%";
}
