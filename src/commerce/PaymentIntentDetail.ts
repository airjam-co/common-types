import { CostModifier } from "./CostModifier";
import { PaymentProcessor } from "./PaymentProcessor";

export interface PaymentIntentDetail {
    paymentProcessor: PaymentProcessor;
    paymentIntentId: string;
    paymentHandshake: string;
    subTotal: number;
    total: number;
    addedFees: CostModifier[];
    taxes: CostModifier[];
    currency: string;
}
