export enum QueryType {
    EXACT = "exact",
    KEYWORD = "keyword"
}

export enum QueryOperator {
    AND = "and",
    OR = "or",
    NOT = "not"
}

export interface QueryParam {
    type: QueryType;
    condition: QueryOperator;
    query: string;
}

export interface AirJamQuery {
    simple: string;
    query: QueryParam[];
}
