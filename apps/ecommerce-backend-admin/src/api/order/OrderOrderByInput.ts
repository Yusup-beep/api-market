import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  productId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
