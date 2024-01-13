import { CodingLanguages, UnifiedModel } from "../common/base";
import { ViewComponentType } from "../common/components";
import { PaginationStyle } from "../common/pagination";
import { DataSourceField, DataSourceFieldType, DataSourceType, TemplateField, TemplateProperty } from "../view/template";

//     Board = "view_board", not used, for now.
export enum ViewType {
    Spotlight = "view_spotlight",
    List = "view_list",
    Gallery = "view_gallery",
    Graph = "view_graph",
    Table = "view_table",
    Map = "view_map",
    Nearby = "view_nearby",
}

export enum PageTypes {
    LANDING = "LANDING",
    LIST = "LIST",
    DETAIL = "DETAIL",
    EDIT = "EDIT",
    CREATE = "CREATE",
    ITEM = "ITEM",
    MARKER = "MARKER",
    SCRIPT = "SCRIPT"
}

export interface ComponentTemplate extends UnifiedModel {
    shortId: string;
    compatibleWith: string[];
    compatibleDisplayType: ViewType[];
    name: string;
    ownerId: string;
    version: number;
    previewImageUrls: string[];
    description: string;
    visibility: "PUBLIC" | "PRIVATE" | "PAID";
    pages: PageTypes[];
    properties: {[id: string]: TemplateProperty};
    pageContent: {[id: string]: string};
    templateFields: {[id: string]: TemplateField};
    componentProperties: {[id: string]: any};
    compatibleLanguages: CodingLanguages[];
    dataSourceType: DataSourceType;
}

export interface dataField {
    display_as: DataSourceFieldType,
    raw_value: string
}

export interface tableViewResponse {
    title: string,
    componentType: ViewComponentType,
    type: ViewType,
    paginationStyle: PaginationStyle,
    fieldMapping: {[id: string]: DataSourceField},
    data: {[id: string]: dataField}[],
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
