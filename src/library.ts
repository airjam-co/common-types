export interface UnifiedModel {
    _id: any; // This _id should be readonly on client side
    readonly createdAt?: string;
    readonly updatedAt?: string;
}

export enum ViewComponentType {
    TableView = "table_view"
}

export enum ViewType {
    Board = "view_board",
    List = "view_list",
    Gallery = "view_gallery",
    Graph = "view_graph",
    Table = "view_table"
}

export enum PaginationStyle {
    Paged = "pagination_paged",
    InfiniteScroll = "pagination_infinite",
    NoPagination = "pagination_none"
}

export enum DataSourceFieldType {
    Text = "text",
    Number = "number",
    DateTime = "datetime",
    Currency = "currency",
    Percent = "percent",
    Link = "link",
    Email = "email"
}

export enum SortBy {
    RECENT = "recent",
    OLDEST = "oldest"
}

export interface DataSourceField {
    columnIdx: number; // for tabular data sources
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
    properties: {[id: string]: TemplateProperty};
    templateContent: string;
    templateFields: {[id: string]: TemplateField};
    componentProperties: {[id: string]: any};
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
    properties: {[id: string]: TemplateProperty};
    componentProperties: {[id: string]: any};
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
    templateProperties: {[id: string]: any}
}

export interface dataField {
    display_as: DataSourceFieldType,
    raw_value: string
}

export const template_cache: {[id: string]: ComponentTemplate} = {
    "card_list": {
        _id: "",
        shortId: "card_list",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.List, ViewType.Gallery],
        name: "Card List",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "card list.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        properties: {
        },
        templateContent: "<div class='container'><span class='title'>{{title}}</span><span class='image'><img src='{{thumbnail}}'/></span><span class='description'>{{description}}</span><span><a href='{{link}}'>{{linkText}}</a></span></div>", // use templating language in the future
        templateFields: {
            title: {
                name: "Title",
                description: "title",
                compatibleTypes: [], //empty for all
            },
            link: {
                name: "Link",
                description: "Link to open",
                compatibleTypes: [DataSourceFieldType.Link]
            },
            linkText: {
                name: "Link Text",
                description: "Link text",
                compatibleTypes: [],
            },
            thumbnail: {
                name: "Thumbnail image",
                description: "thumbnail image",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            description: {
                name: "Description",
                description: "descriptions",
                compatibleTypes: [],
            }
        },
        componentProperties: {
        }
    },
    "standard_table": {
        _id: "",
        shortId: "standard_table",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Table],
        name: "Standard Table",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "table, as shown on the sheet itself.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        templateContent: "",
        templateFields: {},
        properties: {
            caption: {
                name: "Caption",
                description: "Use component's title as a caption",
                default: false,
                type: "BOOLEAN"
            },
            striped: {
                name: "Striped rows",
                description: "Do row colors alternate",
                default: true,
                type: "BOOLEAN"
            },
        },
        componentProperties: {
        }
    },
    "barchart": {
        _id: "",
        shortId: "barchart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Graph],
        name: "Bar Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "bar chart, rows must be horizontal and data in the second row to work.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        templateContent: "",
        templateFields: {},
        properties: {
            useFirstColumnAsLabels: {
                name: "First Column is Labels",
                description: "Use first column as labels",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            },
            showVertically: {
                name: "ShowVertically",
                description: "Display graph vertically, rather than horizontally",
                default: false,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "bar"
        }
    },
    "piechart": {
        _id: "",
        shortId: "piechart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Graph],
        name: "Pie Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "pie chart, rows must be horizontal and data in the second row to work.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        templateContent: "",
        templateFields: {},
        properties: {
            useFirstColumnAsLabels: {
                name: "First Column is Labels",
                description: "Use first column as labels",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            },
            showVertically: {
                name: "ShowVertically",
                description: "Display graph vertically, rather than horizontally",
                default: false,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "pie"
        }
    },
    "linechart": {
        _id: "",
        shortId: "linechart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Graph],
        name: "Line Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "line chart, rows must be horizontal and data in the second row to work.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        templateContent: "",
        templateFields: {},
        properties: {
            useFirstColumnAsLabels: {
                name: "First Column is Labels",
                description: "Use first column as labels",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            },
            showVertically: {
                name: "ShowVertically",
                description: "Display graph vertically, rather than horizontally",
                default: false,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "line"
        }
    }
}

export const style_cache: {[id: string]: TemplateStyle} = {
    "muted": {
        _id: "",
        shortId: "muted",
        name: "Muted",
        compatibleWith: ["barchart"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "single green color theme set",
        visibility: "PUBLIC",
        style: ".muted>.table>tbody>tr:nth-child(odd)>td, .muted>.table>tbody>tr:nth-child(odd)>th { background-color: #F9F9FB; } .muted>.table th { font-size: smaller; color: #23262E; } .muted>.table>tbody>tr, .muted>.table>thead>tr { border: 0px solid transparent }",
        containerClassNames: ["muted"],
        properties: {
            borderWidth: {
                name: "Border Width",
                description: "Border width",
                default: 1,
                type: "NUMBER"
            },
            chartColors: {
                name: "Chart Colors",
                description: "Chart colors",
                default: ["#D79922", "#EFE2BA", "#F13C20", "#4056A1", "#C5CBE3"],
                type: "COLOR",
                multiple: true,
                limit: 50
            }
        },
        colorTheme: ["#D79922", "#EFE2BA", "#F13C20", "#4056A1", "#C5CBE3"],
        componentProperties: {
            borderWidth: 1,
        }
    },
    "earthy": {
        _id: "",
        shortId: "earthy",
        name: "Earthy",
        compatibleWith: ["barchart"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "single green color theme set",
        visibility: "PUBLIC",
        style: ".earthy>.table { border: 0.1em solid #E1E0E2; border-radius: 10px !important; border-collapse: separate; border-spacing: 0; overflow: hidden; } .earthy>.table thead { background-color: #F9FBFC; } .earthy>.table th { font-size: smaller; color: #828286; } .earthy>.table>tbody>tr, .earthy>.table>thead>tr { border-color: #F6F5F8 } .earthy>.table>tbody>tr:last-child { border: 0px solid transparent }",
        containerClassNames: ["earthy"],
        properties: {
            borderWidth: {
                name: "Border Width",
                description: "Border width",
                default: 1,
                type: "NUMBER"
            },
            chartColors: {
                name: "Chart Colors",
                description: "Chart colors",
                default: ["#E27D60", "#85CDCA", "#E8A87C", "#C38D9E", "#41B3A3"],
                type: "COLOR",
                multiple: true,
                limit: 50
            }
        },
        colorTheme: ["#E27D60", "#85CDCA", "#E8A87C", "#C38D9E", "#41B3A3"],
        componentProperties: {
            borderWidth: 1,
        }
    },
    "outback": {
        _id: "",
        shortId: "outback",
        name: "Outback",
        compatibleWith: ["barchart"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "single green color theme set",
        visibility: "PUBLIC",
        style: ".outback>.table th { font-size: smaller; color: #23262E; } .outback>.table>thead>tr { border: 0px solid transparent; border-top: 1px solid #EAE9EE; }",
        containerClassNames: ["outback"],
        properties: {
            borderWidth: {
                name: "Border Width",
                description: "Border width",
                default: 1,
                type: "NUMBER"
            },
            chartColors: {
                name: "Chart Colors",
                description: "Chart colors",
                default: ["#8D8741", "#659DBD", "#DAAD86", "#BC986A", "#FBEEC1", "#C3C078", "#9978C3", "#82C378", "#DE67A0"],
                type: "COLOR",
                multiple: true,
                limit: 50
            }
        },
        colorTheme: ["#8D8741", "#659DBD", "#DAAD86", "#BC986A", "#FBEEC1", "#C3C078", "#9978C3", "#82C378", "#DE67A0"],
        componentProperties: {
            borderWidth: 1
        }
    },
    "concise_gallery": {
        _id: "",
        shortId: "concise_gallery",
        name: "Concise gallery list",
        compatibleWith: ["card_list"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Concision is the key.",
        visibility: "PUBLIC",
        style: ".concise_gallery .container { display: inline-grid; padding: 10px; width: 300px; border: 1px solid #ddd; border-radius: 10px; margin: 5px; } .concise_gallery .container .title { font-size: 1.2 rem; font-weight: 600; }  .concise_gallery .container .image img { width: 100% } .concise_gallery .container .description { display: block } .concise_gallery .pagination a, .concise_gallery .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["concise_gallery"],
        colorTheme: ["#ddd"],
        properties: {
        },
        componentProperties: {
        }
    }
}