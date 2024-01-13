import { QueryOperator } from "./QueryOperator";
import { QueryType } from "./QueryType";

export interface QueryParam {
    type: QueryType;
    condition: QueryOperator;
    query: string;
}
