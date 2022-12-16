import { TGoodsData } from "../types/types";
import { IItemClass } from "../types/types";
import { ICartItems } from "../types/types";

class Product implements IItemClass {
  public _id: number;
  public _title: string;
  public _description: string;
  public _price: number;
  public _discountPercentage: number;
  public _rating: number;
  public _stock: number;
  public _brand: string;
  public _category: string;
  public _thumbnail: string;
  public _images: string[];

  constructor(item: TGoodsData) {
    this._id = item.id;
    this._title = item.title;
    this._description = item.description;
    this._price = item.price;
    this._discountPercentage = item.discountPercentage;
    this._rating = item.rating;
    this._stock = item.stock;
    this._brand = item.brand;
    this._category = item.category;
    this._thumbnail = item.thumbnail;
    this._images = item.images;
  }

  rendore(link: string, appendPath: HTMLElement): void {
    const bodyItem = document.createElement("div");
    bodyItem.classList.add("product");
    appendPath.append(bodyItem);

    const bodyItemTitle = document.createElement("h2");
    bodyItemTitle.classList.add("product__title");
    bodyItemTitle.innerHTML = `${this._title}`;
    bodyItem.append(bodyItemTitle);
    // всё что ниже тайтла
    const bodyItemMain = document.createElement("div");
    bodyItemMain.classList.add("product__main");
    bodyItem.append(bodyItemMain);
    // картинку на задний план
    const backImg = document.createElement("img");
    backImg.classList.add("product__main-img");
    backImg.src = `${this._thumbnail}`;
    bodyItemMain.append(backImg);
    // блок с описанием
    const descriptionBlock = document.createElement("div");
    descriptionBlock.classList.add("description__block");
    bodyItemMain.append(descriptionBlock);

    const descriptionCategory = document.createElement("p");
    descriptionCategory.classList.add("description__block-category");
    descriptionCategory.innerHTML = `<span>Category:</span> ${this._category}`;
    descriptionBlock.append(descriptionCategory);

    const descriptionBrand = document.createElement("p");
    descriptionBrand.classList.add("description__block-brand");
    descriptionBrand.innerHTML = `<span>Brand:</span> ${this._brand}`;
    descriptionBlock.append(descriptionBrand);

    const descriptionPrice = document.createElement("p");
    descriptionPrice.classList.add("description__block-price");
    descriptionPrice.innerHTML = `<span>Price:</span> ${this._price}`;
    descriptionBlock.append(descriptionPrice);

    const descriptionDiscount = document.createElement("p");
    descriptionDiscount.classList.add("description__block-discount");
    descriptionDiscount.innerHTML = `<span>Discount:</span> ${this._discountPercentage}`;
    descriptionBlock.append(descriptionDiscount);

    const descriptionRating = document.createElement("p");
    descriptionRating.classList.add("description__block-rating");
    descriptionRating.innerHTML = `<span>Rating:</span> ${this._rating}`;
    descriptionBlock.append(descriptionRating);

    const descriptionStock = document.createElement("p");
    descriptionStock.classList.add("description__block-stock");
    descriptionStock.innerHTML = `<span>Stock:</span> ${this._stock}`;
    descriptionBlock.append(descriptionStock);

    // блок с кнопками
    const buttonBlocks = document.createElement("div");
    buttonBlocks.classList.add("buttons__body");
    const buttonAdd = document.createElement("button");
    buttonAdd.classList.add("button__body-add");
    buttonAdd.innerHTML = "add to cart";

    // ссылка на кнопке одного товара
    const itemLink = document.createElement("a");
    itemLink.classList.add("button__body-link");
    itemLink.href = `${link}`;
    itemLink.setAttribute("data-navigo", "");
    //-----------------------------------
    const buttonInfo = document.createElement("button");
    buttonInfo.classList.add("button__body-info");
    buttonInfo.innerHTML = "information";
    itemLink.setAttribute("id", `${this._id}`);
    itemLink.append(buttonInfo);
    buttonBlocks.append(buttonAdd, itemLink);
    bodyItemMain.append(buttonBlocks);
    //добавляем local storage для корзины

    buttonAdd.addEventListener("click", () => {
      const lsCart = localStorage.getItem("cart-storage");
      if (!lsCart) {
        const arrItemsCart: ICartItems[] = [];
        const objItemsCart: ICartItems = {
          id: this._id,
          count: 1,
          price: this._price,
        };
        arrItemsCart.push(objItemsCart);
        localStorage.setItem("cart-storage", JSON.stringify(arrItemsCart));
      } else {
        const objItemsCart: ICartItems = {
          id: this._id,
          count: 1,
          price: this._price,
        };
        const addItem = JSON.parse(localStorage.getItem("cart-storage") || "");
        addItem.push(objItemsCart);
        localStorage.setItem("cart-storage", JSON.stringify(addItem));
      }
    });
  }
}

export default Product;
