export type TGoodsData = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface IItemClass {
  _id: number;
  _title: string;
  _description: string;
  _price: number;
  _discountPercentage: number;
  _rating: number;
  _stock: number;
  _brand: string;
  _category: string;
  _thumbnail: string;
  _images: string[];
  rendore(link: string, appendPath: HTMLElement): void;
  render(): void;
}

export interface ICartItems {
  id: number;
  count: number;
  price: number;
}
