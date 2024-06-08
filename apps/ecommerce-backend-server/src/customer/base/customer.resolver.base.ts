/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Customer } from "./Customer";
import { CustomerCountArgs } from "./CustomerCountArgs";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerFindUniqueArgs } from "./CustomerFindUniqueArgs";
import { CreateCustomerArgs } from "./CreateCustomerArgs";
import { UpdateCustomerArgs } from "./UpdateCustomerArgs";
import { DeleteCustomerArgs } from "./DeleteCustomerArgs";
import { CartFindManyArgs } from "../../cart/base/CartFindManyArgs";
import { Cart } from "../../cart/base/Cart";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { CustomerService } from "../customer.service";
@graphql.Resolver(() => Customer)
export class CustomerResolverBase {
  constructor(protected readonly service: CustomerService) {}

  async _customersMeta(
    @graphql.Args() args: CustomerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Customer])
  async customers(
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    return this.service.customers(args);
  }

  @graphql.Query(() => Customer, { nullable: true })
  async customer(
    @graphql.Args() args: CustomerFindUniqueArgs
  ): Promise<Customer | null> {
    const result = await this.service.customer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Customer)
  async createCustomer(
    @graphql.Args() args: CreateCustomerArgs
  ): Promise<Customer> {
    return await this.service.createCustomer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Customer)
  async updateCustomer(
    @graphql.Args() args: UpdateCustomerArgs
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Customer)
  async deleteCustomer(
    @graphql.Args() args: DeleteCustomerArgs
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Cart], { name: "carts" })
  async findCarts(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: CartFindManyArgs
  ): Promise<Cart[]> {
    const results = await this.service.findCarts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
