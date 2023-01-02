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
  createItem(link: string, appendPath: HTMLElement): void;
  render(): void;
}

export interface ICartItems {
  id: number;
  count: number;
  stock: number;
  price: number;
}

export type TIdCheck = string | undefined;

export type TFilterStore = {
  categories: string[];
  brands: string[];
  minStock: number;
  maxStock: number;
  minPrice: number;
  maxPrice: number;
  search: string;
  sort: string;
  big: string;
};

export type TCompose = (data: TGoodsData[]) => TGoodsData[];

export interface IQueryCart {
  limit: number;
  page: number;
}
