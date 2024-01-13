import { DataSourceFieldType } from "./DataSourceFieldType";

export interface DataSourceField {
    columnIdx: number; // for tabular data sources
    fieldName: string;
    variableName: string;
    displayAs: DataSourceFieldType;
    show: boolean;
    searchable: boolean;
}
