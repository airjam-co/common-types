import { UnifiedModel } from "../common";

export interface Amount extends UnifiedModel {
    amount: number;
    currency: string;
}
