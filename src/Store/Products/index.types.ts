export interface ProductsItem {
  id: string;
  name: string;
  description: string;
  image: string;
  options: {
    id: string;
    name: string;
    price: number;
    availableQty: number;
  }[]
}

export interface ProductsState {
    data: ProductsItem[];
}