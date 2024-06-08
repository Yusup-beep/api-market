import { CartUpdateManyWithoutCustomersInput } from "./CartUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  carts?: CartUpdateManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
