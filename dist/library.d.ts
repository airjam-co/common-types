export interface UnifiedModel {
    _id: any;
    readonly createdAt?: string;
    readonly updatedAt?: string;
}
export declare enum ViewComponentType {
    TableView = "table_view"
}
export declare enum ViewType {
    List = "view_list",
    Gallery = "view_gallery",
    Graph = "view_graph",
    Table = "view_table",
    Map = "view_map",
    Nearby = "view_nearby"
}
export declare enum CodingLanguages {
    Javascript = "javascript",
    Typescript = "typescript",
    React = "react",
    ReactNative = "react_native"
}
export declare enum PaginationStyle {
    Paged = "pagination_paged",
    InfiniteScroll = "pagination_infinite",
    NoPagination = "pagination_none"
}
export declare enum DataSourceFieldType {
    Text = "text",
    Number = "number",
    DateTime = "datetime",
    Currency = "currency",
    Percent = "percent",
    Link = "link",
    Email = "email",
    LatLng = "latlng",
    Address = "address"
}
export declare enum SortBy {
    RECENT = "recent",
    OLDEST = "oldest"
}
export interface DataSourceField {
    columnIdx: number;
    fieldName: string;
    variableName: string;
    displayAs: DataSourceFieldType;
    show: boolean;
    searchable: boolean;
}
export interface TemplateProperty {
    name: string;
    description?: string;
    default?: any;
    type: ("BOOLEAN" | "NUMBER" | "COLOR" | "LIST" | "MULTI" | "TEXT");
    advancedProperty?: boolean;
    tab?: string;
    multiple?: boolean;
    limit?: number;
    values?: any[];
}
export interface TemplateField {
    name: string;
    description: string;
    compatibleTypes: DataSourceFieldType[];
}
export declare enum PageTypes {
    LANDING = "LANDING",
    LIST = "LIST",
    DETAIL = "DETAIL",
    EDIT = "EDIT",
    CREATE = "CREATE",
    MARKER = "MARKER"
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
    properties: {
        [id: string]: TemplateProperty;
    };
    pageContent: {
        [id: string]: string;
    };
    templateFields: {
        [id: string]: TemplateField;
    };
    componentProperties: {
        [id: string]: any;
    };
    compatibleLanguages: CodingLanguages[];
}
export interface TemplateStyle extends UnifiedModel {
    shortId: string;
    name: string;
    compatibleWith: string[];
    ownerId: string;
    version: number;
    style: string;
    jsonContent?: any;
    containerClassNames: string[];
    previewImageUrls: string[];
    description: string;
    visibility: ("PUBLIC" | "PRIVATE" | "PAID");
    colorTheme: string[];
    properties: {
        [id: string]: TemplateProperty;
    };
    componentProperties: {
        [id: string]: any;
    };
}
export interface MapStyle extends TemplateStyle {
}
export interface tableViewResponse {
    title: string;
    componentType: ViewComponentType;
    type: ViewType;
    paginationStyle: PaginationStyle;
    fieldMapping: {
        [id: string]: DataSourceField;
    };
    data: {
        [id: string]: dataField;
    }[];
    templateId: string;
    templateVersion: number;
    styleId: string;
    styleVersion: string;
    cssOverride: string;
    totalPages: number;
    currentPage: number;
    templateFields: {
        [id: string]: string;
    };
    templateProperties: {
        [id: string]: any;
    };
}
export interface dataField {
    display_as: DataSourceFieldType;
    raw_value: string;
}
export declare function formattedField(data: string, displayType: DataSourceFieldType): string;
export declare function inferDataSourceFieldType(data: string): DataSourceFieldType;
export declare function isEmail(email: string): boolean;
export declare function isUri(uriStr: string): boolean;
export declare function isDate(dateStr: string): boolean;
export declare const template_cache: {
    [id: string]: ComponentTemplate;
};
export declare const style_cache: {
    [id: string]: TemplateStyle;
};
