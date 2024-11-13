import { UnifiedModel } from "../common";
import { Amount } from "./Amount";

export interface CostModifier extends UnifiedModel {
    uid: string; // UUID
    name: string; // name of the item
    description: string; // displayed to end users 

    // Modifying Amounts
    percentage: number; // % of the subtotal
    amount_money: Amount; // it's either percentage or amount_money

    total: number; // calculated total

    // scope: enum;
    // https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts
}
