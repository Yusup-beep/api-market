import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Cart = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  product?: Product | null;
  totalAmount: number | null;
  updatedAt: Date;
};
