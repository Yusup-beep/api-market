/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

@InputType()
class ProductUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CartUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => CartUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => CartUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  carts?: CartUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stock?: number | null;
}

export { ProductUpdateInput as ProductUpdateInput };
