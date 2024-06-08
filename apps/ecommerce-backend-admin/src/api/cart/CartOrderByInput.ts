import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
