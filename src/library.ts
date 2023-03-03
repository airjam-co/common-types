export interface UnifiedModel {
    _id: any; // This _id should be readonly on client side
    readonly createdAt?: string;
    readonly updatedAt?: string;
}

export enum ViewComponentType {
    TableView = "table_view"
}

//     Board = "view_board", not used, for now.
export enum ViewType {
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

export function formattedField(data: string, displayType: DataSourceFieldType): string {
    switch (displayType) {
        case DataSourceFieldType.Number:
            return Number(data).toString();
        case DataSourceFieldType.Percent:
            return Number(data).toLocaleString(undefined, {style: "percent", minimumFractionDigits: 2});
        case DataSourceFieldType.DateTime:
            const newDate = new Date(data);
            return newDate.toLocaleDateString();
        case DataSourceFieldType.Currency:
            const currencyFractionDigits = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "USD", // todo: somehow make this smarter
            }).resolvedOptions().maximumFractionDigits;
            const currencyString = Number(data).toLocaleString(undefined, {
                maximumFractionDigits: currencyFractionDigits
            });
            return currencyString;
        case DataSourceFieldType.Link:
        case DataSourceFieldType.Email:
        case DataSourceFieldType.Text:
        default:
            return data;
    }
}

export function inferDataSourceFieldType(data: string): DataSourceFieldType {
    // in the order of uniqueness -> Email, Link, DateTime, (Currency, Percent, Number), Text
    if (isEmail(data)) return DataSourceFieldType.Email;
    if (isUri(data)) return DataSourceFieldType.Link;
    if (isDate(data)) return DataSourceFieldType.DateTime;
    // currency and percent are not inferrable
    if (!isNaN(parseFloat(data))) return DataSourceFieldType.Number;
    return DataSourceFieldType.Text;
}

export function isEmail(email: string): boolean {
    const re: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

export function isUri(uriStr: string): boolean {
    try {
        return Boolean(new URL(uriStr));
    }
    catch {
        return false;
    }
}

export function isDate(dateStr: string): boolean {
    return !isNaN(new Date(dateStr).getDate());
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
        description: "This template displays each row of data as a card, with a title, an image, and a link to redirect to.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        properties: {
        },
        templateContent: "<div class='container'><span class='title'>{{title}}</span><span class='image'><img src='{{thumbnail}}'/></span><span class='description'>{{description}}</span><span><a href='{{link}}'>{{linkText}}</a></span></div>", // use templating language in the future
        templateFields: {
            title: {
                name: "Title",
                description: "Title of the card item",
                compatibleTypes: [], //empty for all
            },
            link: {
                name: "Link",
                description: "Link to navigate to",
                compatibleTypes: [DataSourceFieldType.Link]
            },
            linkText: {
                name: "Link Text",
                description: "Text for the link",
                compatibleTypes: [],
            },
            thumbnail: {
                name: "Thumbnail image",
                description: "Main image for the card",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            description: {
                name: "Description",
                description: "Item's description",
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
        name: "Table",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Table template shows your data in a tabular format.",
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
                description: "Check to make the background colors of rows alternate",
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
        description: "The bar chart template assumes each column in your data as a bar. Also, the data must be in numeric format to work.",
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
        description: "Pie chart template uses the first two rows of your data to visualize the chart and its labels. Please note, data must be in numeric format to work.",
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
        description: "Line chart template requires all non-label data to be in numeric format to work.",
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
    },
    "formal_menu": {
        _id: "",
        shortId: "formal_menu",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.List],
        name: "Formal Menu",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "This template displays data as a menu / catalog of items with prices.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        properties: {
        },
        templateContent: "<div class='container'><span class='name'>{{name}}</span><span class='description'>{{description}}</span><span class='price'>{{price}}</span></div>",
        templateFields: {
            name: {
                name: "Name",
                description: "Item name",
                compatibleTypes: [], //empty for all
            },
            price: {
                name: "Price",
                description: "Item price",
                compatibleTypes: []
            },
            description: {
                name: "Description",
                description: "Item's description",
                compatibleTypes: [],
            }
        },
        componentProperties: {
        }
    },
    "graphic_menu": {
        _id: "",
        shortId: "graphic_menu",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Gallery],
        name: "Graphic Menu",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "This template displays data as a menu / catalog of items with prices and images.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        properties: {
        },
        templateContent: "<div class='container'><span class='image'><img src='{{image}}'/></span><span class='name'>{{name}}</span><span class='price'>{{price}}</span><span class='description'>{{description}}</span></div>",
        templateFields: {
            name: {
                name: "Name",
                description: "Item name",
                compatibleTypes: [], //empty for all
            },
            price: {
                name: "Price",
                description: "Item price",
                compatibleTypes: []
            },
            image: {
                name: "Item Image",
                description: "Image for the item",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            description: {
                name: "Description",
                description: "Item's description",
                compatibleTypes: [],
            }
        },
        componentProperties: {
        }
    },
    "job_postings": {
        _id: "",
        shortId: "job_postings",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.List],
        name: "Job Postings",
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "This template displays each row of data as a card, with a title, an image, and a link to redirect to.",
        visibility: "PUBLIC",
        pages: ["LIST"],
        properties: {
        },
        templateContent: "<div class='container'><span class='title'><a href='{{link}}'>{{title}}</a></span><span class='description'>{{description}}</span></div>",
        templateFields: {
            title: {
                name: "Title",
                description: "Title of the posting",
                compatibleTypes: [], //empty for all
            },
            link: {
                name: "Call To Action Link",
                description: "Link to navigate to",
                compatibleTypes: [DataSourceFieldType.Link]
            },
            description: {
                name: "Description",
                description: "Short description for the posting",
                compatibleTypes: [],
            }
        },
        componentProperties: {
        }
    },
}

export const style_cache: {[id: string]: TemplateStyle} = {
    "muted": {
        _id: "",
        shortId: "muted",
        name: "Muted",
        compatibleWith: ["barchart", "piechart", "linechart", "standard_table"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Colors that blend in and harmonize.",
        visibility: "PUBLIC",
        style: ".muted>.table {text-align: left} .muted>.table>thead { font-size: 20px; background-color: #EFE2BA; } .muted>.table>tbody>tr:nth-child(odd)>td, .muted>.table>tbody>tr:nth-child(odd)>th { background-color: #f2f0e8; } .muted>.table th { font-size: smaller; color: #23262E; } .muted>.table>tbody>tr, .muted>.table>thead>tr { border: 0px solid transparent }",
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
        compatibleWith: ["barchart", "piechart", "linechart"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Colors inspired by nature to show a calm and peaceful look.",
        visibility: "PUBLIC",
        style: ".earthy>.table { border: 0.1em solid #E1E0E2; border-radius: 10px !important; border-collapse: separate; border-spacing: 0; overflow: hidden; text-align: left; } .earthy>.table thead { background-color: #F9FBFC; } .earthy>.table th { font-size: smaller; color: #828286; } .earthy>.table>tbody>tr, .earthy>.table>thead>tr { border-color: #F6F5F8 } .earthy>.table>tbody>tr:last-child { border: 0px solid transparent }",
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
        compatibleWith: ["barchart", "piechart", "linechart", "standard_table"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Colors inspired by sands and succulent biome.",
        visibility: "PUBLIC",
        style: ".outback>.table { text-align: left; } .outback>.table>thead { font-size: 20px; background-color: #FBEEC1; } .outback>.table th { font-size: smaller; color: #23262E; } .outback>.table>thead>tr { border: 0px solid transparent; } .outback>.table>tbody>tr:nth-child(odd)>td, .outback>.table>tbody>tr:nth-child(odd)>th { background-color: #faf7ec; }",
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
        name: "Minimal Gallery",
        compatibleWith: ["card_list"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Minimalistic look and feel for gallery-typed templates.",
        visibility: "PUBLIC",
        style: ".concise_gallery .container { display: inline-grid; padding: 10px; width: 300px; border: 1px solid #ddd; border-radius: 10px; margin: 5px; } .concise_gallery .container .title { font-size: 1.2 rem; font-weight: 600; }  .concise_gallery .container .image img { width: 100% } .concise_gallery .container .description { display: block } .concise_gallery .pagination a, .concise_gallery .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["concise_gallery"],
        colorTheme: ["#ddd"],
        properties: {
        },
        componentProperties: {
        }
    },
    "fine_dining": {
        _id: "",
        shortId: "fine_dining",
        name: "Fine Dining Menu",
        compatibleWith: ["formal_menu"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Traditional look and feel for menu templates.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Castoro&display=swap'); .fine_dining .container { font-family: 'Castoro', serif; display: block; padding: 10px; text-align: center } .fine_dining .container .name { font-size: 20px; }  .fine_dining .container .price { font-size: 18px; display: block; margin-top: 5px; margin-bottom: 10px } .fine_dining .container .description { display: block } .fine_dining .pagination a, .fine_dining .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["fine_dining"],
        colorTheme: ["#000"],
        properties: {
        },
        componentProperties: {
        }
    },
    "contemporary_fine_dining": {
        _id: "",
        shortId: "contemporary_fine_dining",
        name: "Contemporary Sans",
        compatibleWith: ["formal_menu"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Modern look and feel for fine dining menu templates.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Tenor+Sans&display=swap'); .contemporary_fine_dining .container { display: block; padding: 10px; text-align: center } .contemporary_fine_dining .container .name { font-family: 'Tenor Sans', sans-serif; font-size: 20px; } .contemporary_fine_dining .container .price { font-family: 'Tenor Sans', sans-serif; font-size: 18px; display: block; margin-top: 5px; margin-bottom: 10px } .contemporary_fine_dining .container .description { font-family: 'Playfair Display', serif; font-style: italic; display: block } .contemporary_fine_dining .pagination a, .contemporary_fine_dining .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["contemporary_fine_dining"],
        colorTheme: ["#000"],
        properties: {
        },
        componentProperties: {
        }
    },
    "healthy_five": {
        _id: "",
        shortId: "healthy_five",
        name: "Healthy Five",
        compatibleWith: ["graphic_menu"], // compatible templates
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Vibrant style for graphic menu templates with emphasis on item image.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .healthy_five .container { display: inline-block; width: 300px; padding: 10px; font-family: 'Open Sans', sans-serif; } .healthy_five .container .image img { display: block; max-width: 100%; height: auto; margin: 10px 0 5px 0; } .healthy_five .container .name { font-size: 20px; } .healthy_five .container .price { font-size: 18px; display: block; } .healthy_five .container .description { display: block } .healthy_five .pagination a, .healthy_five .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["healthy_five"],
        colorTheme: ["#000"],
        properties: {
        },
        componentProperties: {
        }
    },
    "menu_boxes": {
        _id: "",
        shortId: "menu_boxes",
        name: "Boxed Menu",
        compatibleWith: ["graphic_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Graphic menu templates with container boxes around each menu item.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap'); .menu_boxes .container { display: inline-block; width: 300px; padding: 10px; font-family: 'Roboto Slab', serif; border: 1px solid #efefef; border-radius: 5px; margin: 5px; } .menu_boxes .container .image { object-fit: cover; } .menu_boxes .container .image img { display: block; width: 100%; height: 200px; margin: 5px 0 5px 0; } .menu_boxes .container .name { font-size: 16px; } .menu_boxes .container .price { font-size: 14px; display: block; } .menu_boxes .container .description { display: block; font-size: 14px; } .menu_boxes .pagination a, .menu_boxes .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["menu_boxes"],
        colorTheme: ["#efefef", "#000"],
        properties: {
        },
        componentProperties: {
        }
    },
    "menu_box_list": {
        _id: "",
        shortId: "menu_box_list",
        name: "Boxed List",
        compatibleWith: ["graphic_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Graphic menu templates with stacked container boxes displayed like a list.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap'); .menu_box_list .container { display: inline-block; width: 400px; height: 100px; padding: 5px; font-family: 'Roboto Slab', serif; border: 1px solid #efefef; border-radius: 5px; margin: 5px; } .menu_box_list .container .image { height: 100px; float: right; } .menu_box_list .container .image img { display: block; width: 100px; height: 100px; object-fit: cover; } .menu_box_list .container .name { font-size: 16px; margin-bottom: 5px; } .menu_box_list .container .price { font-size: 14px; display: block; margin-bottom: 10px } .menu_box_list .container .description { display: block; font-size: 14px; } .menu_box_list .pagination a, .menu_box_list .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["menu_box_list"],
        colorTheme: ["#efefef", "#000"],
        properties: {
        },
        componentProperties: {
        }
    },
    "job_posting_plain": {
        _id: "",
        shortId: "job_posting_plain",
        name: "Plain",
        compatibleWith: ["job_postings"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Plain job postings style.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .job_posting_plain .container a { color: #000; text-decoration: none; } .job_posting_plain .container a:hover { text-decoration: underline; } .job_posting_plain .container { display: block; font-family: 'Open Sans', sans-serif; border-top: 1px solid #aaa; margin: 5px 0 5px 0; padding: 15px 0 15px 0; } .job_posting_plain .container .title { font-size: 20px; margin-bottom: 5px; } .job_posting_plain .container .description { display: block; font-size: 16px; } .job_posting_plain .pagination a, .job_posting_plain .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["job_posting_plain"],
        colorTheme: ["#fff", "#000", "#aaa"],
        properties: {
        },
        componentProperties: {
        }
    }
}