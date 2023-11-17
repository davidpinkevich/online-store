import { TGoodsData, ICartItems } from "../../types/types";
import addItemCurrent from "./add-current-items";
import { itemCost } from "./item-cost";

function cartItem(item: TGoodsData): void {
  const bodyitems = <HTMLElement>document.querySelector(".products__items");
  const bodyItem = document.createElement("div");
  bodyItem.classList.add("cart-item__body");
  bodyitems.append(bodyItem);
  // вставка картинки (сперва блок для неё, потом внутрь) - отдельный блок
  const wrapImg = document.createElement("div");
  wrapImg.classList.add("cart-item__img");
  bodyItem.append(wrapImg);
  // для вставки порядкового номера
  const wrapImgCount = document.createElement("div");
  wrapImgCount.classList.add("cart-item__img-count");
  wrapImgCount.innerHTML = "0";
  wrapImg.append(wrapImgCount);

  const itemImg = document.createElement("img");
  itemImg.src = item.thumbnail;
  wrapImg.append(itemImg);
  // блок с инфой
  const infoBlock = document.createElement("div");
  infoBlock.classList.add("cart-item__info");
  bodyItem.append(infoBlock);

  const infoTitle = document.createElement("h2");
  infoTitle.classList.add("cart-item__info-title");
  infoTitle.innerHTML = `<span>Model</span>: ${item.title}`;
  infoBlock.append(infoTitle);

  const infoBrand = document.createElement("p");
  infoBrand.classList.add("cart-item__info-brand");
  infoBrand.innerHTML = `<span>Brand</span>: ${item.brand}`;
  infoBlock.append(infoBrand);

  const infoRating = document.createElement("p");
  infoRating.classList.add("cart-item__info-descript");
  infoRating.innerHTML = `<span>Rating</span>: ${item.rating}`;
  infoBlock.append(infoRating);

  const infoDiscount = document.createElement("p");
  infoDiscount.classList.add("cart-item__info-discount");
  infoDiscount.innerHTML = `<span>Discount</span>: ${item.discountPercentage}%`;
  infoBlock.append(infoDiscount);

  const infoDescript = document.createElement("p");
  infoDescript.classList.add("cart-item__info-descript");
  infoDescript.innerHTML = `<span>About</span>: ${item.description}`;
  infoBlock.append(infoDescript);

  // блок с кнопками-----------------------------------------------------
  const blockButtons = document.createElement("div");
  blockButtons.classList.add("cart-item__buttons");
  blockButtons.setAttribute("id", `${item.id}`);
  blockButtons.addEventListener("click", function (event: Event) {
    addItemCurrent(event, btnsAdd, btnsRemove, btnInfoCurrent, btnInfoCost);
  });
  bodyItem.append(blockButtons);

  const buttonsStock = document.createElement("p");
  buttonsStock.classList.add("cart-item__buttons-title");
  buttonsStock.innerHTML = `In stock: <span>${item.stock}</span>`;
  blockButtons.append(buttonsStock);
  // добавить и удалить один элемент товара
  const btnsAdd = document.createElement("button");
  btnsAdd.classList.add("cart-item__buttons-add");
  btnsAdd.innerHTML = "Add";
  blockButtons.append(btnsAdd);

  const btnsRemove = document.createElement("button");
  btnsRemove.classList.add("cart-item__buttons-remove");
  btnsRemove.innerHTML = "Remove";
  blockButtons.append(btnsRemove);

  // инфо о кол-ве товаров и общая ценна за один вид
  const btnInfo = document.createElement("div");
  btnInfo.classList.add("cart-item__buttons-info");
  blockButtons.append(btnInfo);

  const btnInfoCurrent = document.createElement("p");
  btnInfoCurrent.classList.add("cart-item__buttons-info-current");
  btnInfoCurrent.innerHTML = `Items: <span></span>`;
  btnInfo.append(btnInfoCurrent);

  const btnInfoCost = document.createElement("p");
  btnInfoCost.classList.add("cart-item__buttons-info-cost");
  btnInfoCost.innerHTML = `Price: <span></span>`;
  btnInfo.append(btnInfoCost);

  // попытка перезаписать items и price
  const lsCart = JSON.parse(localStorage.getItem("cart-storage") || "");
  lsCart.forEach((itemLs: ICartItems, index: number) => {
    if (itemLs.id === item.id) {
      btnInfoCurrent.innerHTML = `Items: <span>${itemLs.count}</span>`;
      wrapImgCount.innerHTML = `${index + 1}`;
      itemCost(itemLs, btnInfoCost);
    }
  });
}

export default cartItem;
