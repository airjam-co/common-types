import { ViewComponentType } from "../view/ViewComponentType";
import { PaginationStyle } from "../common/PaginationStyle";
import { DataField } from "./DataField";
import { TableViewViewType } from "./TableViewViewType";
import { DataSourceField } from "../view/DataSourceField";

export interface TableViewResponse {
    title: string,
    componentType: ViewComponentType,
    type: TableViewViewType,
    paginationStyle: PaginationStyle,
    fieldMapping: {[id: string]: DataSourceField},
    data: {[id: string]: DataField}[],
    templateId: string,
    templateVersion: number,
    styleId: string,
    styleVersion: string,
    cssOverride: string,
    totalPages: number,
    currentPage: number,
    templateFields: {[id: string]: string},
    templateProperties: {[id: string]: any},
    styleProperties: {[id: string]: any}
}
