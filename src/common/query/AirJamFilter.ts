import { QueryOperator } from "./QueryOperator";
import { QueryType } from "./QueryType";

export interface AirJamFilter {
    // singular filter mode
    operator: QueryType;
    value: any; // can be an array, a number, etc
    field: string;

    // nested mode
    expressionsOperator: QueryOperator; // "not" operator will only look at first element in the expressions, essentially behaving like "ne" singular operator
    expressions: AirJamFilter[];
}