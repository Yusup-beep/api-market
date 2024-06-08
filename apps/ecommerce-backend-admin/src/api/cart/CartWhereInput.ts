import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CartWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  totalAmount?: FloatNullableFilter;
};
