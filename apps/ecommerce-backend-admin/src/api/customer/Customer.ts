import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  carts?: Array<Cart>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
