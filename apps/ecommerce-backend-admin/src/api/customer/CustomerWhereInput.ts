import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  carts?: CartListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
