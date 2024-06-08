import { CartCreateNestedManyWithoutCustomersInput } from "./CartCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  carts?: CartCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
