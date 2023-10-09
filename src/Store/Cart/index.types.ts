export interface CartItem {
  quantity: number;
  optionId: string;
  productId: string;
}

export interface CartState {
  items: CartItem[];
}
