import { TGoodsData } from "../types/types";
import { IItemClass } from "../types/types";
import { ICartItems } from "../types/types";
import { totalPrice } from "./cart/total-cost";
import { addAllAmount } from "./cart/total-amount";

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

  createItem(link: string, appendPath: HTMLElement): void {
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
    descriptionPrice.innerHTML = `<span>Price:</span> ${this._price} $`;
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
    // проверка на добавление товара в корзину, чтобы кнопка светилась как надо
    //при обновлении страницы
    const lsCartMain = localStorage.getItem("cart-storage");
    if (lsCartMain && JSON.parse(lsCartMain || "").length > 0) {
      JSON.parse(lsCartMain || "").forEach((item: ICartItems) => {
        if (item.id === this._id) {
          buttonAdd.classList.add("active");
          buttonAdd.innerHTML = "from cart";
        }
      });
    }
    //добавляем local storage для корзины
    buttonAdd.addEventListener("click", () => {
      const lsCart = localStorage.getItem("cart-storage");
      if (buttonAdd.classList.contains("active")) {
        buttonAdd.classList.remove("active");
      } else {
        buttonAdd.classList.add("active");
      }
      if (!lsCart) {
        const arrItemsCart: ICartItems[] = [];
        const objItemsCart: ICartItems = {
          id: this._id,
          count: 1,
          stock: this._stock,
          price: this._price,
        };
        arrItemsCart.push(objItemsCart);
        localStorage.setItem("cart-storage", JSON.stringify(arrItemsCart));
      } else {
        const objItemsCart: ICartItems = {
          id: this._id,
          count: 1,
          stock: this._stock,
          price: this._price,
        };
        const addItem = JSON.parse(localStorage.getItem("cart-storage") || "");
        addItem.push(objItemsCart);
        localStorage.setItem("cart-storage", JSON.stringify(addItem));
      }
      // удалять элементы из стореджа
      if (!buttonAdd.classList.contains("active") && lsCart !== null) {
        buttonAdd.innerHTML = "add to cart";
        const newArr: ICartItems[] | null = [];
        JSON.parse(lsCart).forEach((item: ICartItems) => {
          if (item && item.id !== this._id) {
            newArr?.push(item);
          }
        });
        localStorage.setItem("cart-storage", JSON.stringify(newArr || ""));
      } else {
        buttonAdd.innerHTML = "from cart";
      }
      const fullPrice = <HTMLElement>(
        document.querySelector(".header__cost>span")
      );
      const currItems = <HTMLElement>(
        document.querySelector(".basket__basket-amount")
      );
      totalPrice(fullPrice);
      addAllAmount(currItems);
    });
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("good");
    div.innerHTML = `
    <section class="good__navigation">
        <span class="good__store"><a href="/" class="good__link" data-navigo>STORE</a></span>
        <span class="good__more">>></span>
        <span class="good__category">${this._category}</span>
        <span class="good__more">>></span>
        <span class="good__brand">${this._brand}</span>
        <span class="good__more">>></span>
        <span class="good__model">${this._title}</span>
    </section>

    <section class="good-item">
        <h1>${this._title}</h1>
        <div class="good-item__content">
            <div class="good-item__photos">
                <img src="${this._images[0]}" alt="main"
                    class="good-item__photo">
                <div class="good-item__slides">
                    <img class="good-item__main-photo good-item__photo-small good-item__photo-active" src="${this._images[0]}" alt="main">
                    <img class="good-item__main-photo good-item__photo-small" src="${this._images[1]}" alt="second">
                    <img class="good-item__main-photo good-item__photo-small" src="${this._images[2]}" alt="third">
                </div>
            </div>
            <div class="good-item__descr">
                <div class="good-item__name">
                    <h2>Category:</h2>
                    <p>${this._category}</p>
                </div>
                <div class="good-item__name">
                    <h2>Brand:</h2>
                    <p>${this._brand}</p>
                </div>
                <div class="good-item__name">
                    <h2>Rating:</h2>
                    <p>${this._rating}</p>
                </div>
                <div class="good-item__name">
                    <h2>Discount Percentage:</h2>
                    <p>${this._discountPercentage}</p>
                </div>
                <div class="good-item__name">
                    <h2>Stock:</h2>
                    <p>${this._stock}</p>
                </div>
                <div class="good-item__name good-item__name-scroll">
                <h2>Description:</h2>
                <p>${this._description}</p>
            </div>
            </div>
            <div class="good-item__control">
                <div class="good-item__price">${this._price}</div>
                <button class="button button__add">ADD TO CART</button>
                <button class="button button__drop">DROP FROM CART</button>
                <button class="button button__buy">BYU NOW</button>
            </div>
        </div>
    </section>
    `;
    //-----------------------------------------------------
    const root = document.querySelector(".good");
    root?.append(div);

    const secondBtn = <HTMLButtonElement>(
      document.querySelector(".button.button__add")
    );
    const btnBuy = <HTMLButtonElement>document.querySelector(".button__buy");
    const lsCartMain = localStorage.getItem("cart-storage");
    if (lsCartMain && JSON.parse(lsCartMain || "").length > 0) {
      JSON.parse(lsCartMain || "").forEach((item: ICartItems) => {
        if (item.id === this._id) {
          secondBtn.classList.add("active");
          secondBtn.innerHTML = "from cart";
        }
      });
    }

    secondBtn.addEventListener("click", () => {
      const lsCart = localStorage.getItem("cart-storage");
      if (secondBtn.classList.contains("active")) {
        secondBtn.classList.remove("active");
      } else {
        secondBtn.classList.add("active");
      }
      if (!lsCart) {
        const arrItemsCart: ICartItems[] = [];
        const objItemsCart: ICartItems = {
          id: this._id,
          count: 1,
          stock: this._stock,
          price: this._price,
        };
        arrItemsCart.push(objItemsCart);
        localStorage.setItem("cart-storage", JSON.stringify(arrItemsCart));
      } else {
        const objItemsCart: ICartItems = {
          id: this._id,
          count: 1,
          stock: this._stock,
          price: this._price,
        };
        const addItem = JSON.parse(localStorage.getItem("cart-storage") || "");
        addItem.push(objItemsCart);
        localStorage.setItem("cart-storage", JSON.stringify(addItem));
      }
      // удалять элементы из стореджа
      if (!secondBtn.classList.contains("active") && lsCart !== null) {
        secondBtn.innerHTML = "add to cart";
        const newArr: ICartItems[] | null = [];
        JSON.parse(lsCart).forEach((item: ICartItems) => {
          if (item && item.id !== this._id) {
            newArr?.push(item);
          }
        });
        localStorage.setItem("cart-storage", JSON.stringify(newArr || ""));
      } else {
        secondBtn.innerHTML = "from cart";
      }
      const fullPrice = <HTMLElement>(
        document.querySelector(".header__cost>span")
      );
      const currItems = <HTMLElement>(
        document.querySelector(".basket__basket-amount")
      );
      totalPrice(fullPrice);
      addAllAmount(currItems);
    });

    btnBuy.addEventListener("click", () => {
      const lsCart = localStorage.getItem("cart-storage");
      if (secondBtn.classList.contains("active")) {
        window.location.assign(`${window.location.origin}/#/cart`);
        const mainBuy = <HTMLElement>document.querySelector(".cost__body-buy");
        setTimeout(() => mainBuy.click(), 0);
      } else {
        if (!lsCart) {
          const arrItemsCart: ICartItems[] = [];
          const objItemsCart: ICartItems = {
            id: this._id,
            count: 1,
            stock: this._stock,
            price: this._price,
          };
          arrItemsCart.push(objItemsCart);
          localStorage.setItem("cart-storage", JSON.stringify(arrItemsCart));
          window.location.assign(`${window.location.origin}/#/cart`);
          const mainBuy = <HTMLElement>(
            document.querySelector(".cost__body-buy")
          );
          setTimeout(() => mainBuy.click(), 0);
        } else {
          const objItemsCart: ICartItems = {
            id: this._id,
            count: 1,
            stock: this._stock,
            price: this._price,
          };
          const addItem = JSON.parse(
            localStorage.getItem("cart-storage") || ""
          );
          addItem.push(objItemsCart);
          localStorage.setItem("cart-storage", JSON.stringify(addItem));
          window.location.assign(`${window.location.origin}/#/cart`);
          const mainBuy = <HTMLElement>(
            document.querySelector(".cost__body-buy")
          );
          setTimeout(() => mainBuy.click(), 0);
        }
        secondBtn.classList.add("active");
      }
      const fullPrice = <HTMLElement>(
        document.querySelector(".header__cost>span")
      );
      const currItems = <HTMLElement>(
        document.querySelector(".basket__basket-amount")
      );
      totalPrice(fullPrice);
      addAllAmount(currItems);
    });
  }
}

export default Product;
