export interface UnifiedModel {
    _id: any;
    readonly createdAt?: string;
    readonly updatedAt?: string;
}
export declare enum ViewComponentType {
    TableView = "table_view"
}
export declare enum ViewType {
    Board = "view_board",
    List = "view_list",
    Gallery = "view_gallery",
    Graph = "view_graph",
    Table = "view_table"
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
    Email = "email"
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
}
export interface TemplateProperty {
    name: string;
    description?: string;
    default?: any;
    type: ("BOOLEAN" | "NUMBER" | "COLOR");
    advancedProperty?: boolean;
    tab?: string;
    multiple?: boolean;
    limit?: number;
}
export interface TemplateField {
    name: string;
    description: string;
    compatibleTypes: DataSourceFieldType[];
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
    pages: ("LIST" | "DETAIL" | "EDIT" | "CREATE")[];
    properties: {
        [id: string]: TemplateProperty;
    };
    templateContent: string;
    templateFields: {
        [id: string]: TemplateField;
    };
    componentProperties: {
        [id: string]: any;
    };
}
export interface TemplateStyle extends UnifiedModel {
    shortId: string;
    name: string;
    compatibleWith: string[];
    ownerId: string;
    version: number;
    style: string;
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
export declare const template_cache: {
    [id: string]: ComponentTemplate;
};
export declare const style_cache: {
    [id: string]: TemplateStyle;
};
