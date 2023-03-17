var ViewComponentType;
(function (ViewComponentType) {
    ViewComponentType["TableView"] = "table_view";
})(ViewComponentType || (ViewComponentType = {}));
//     Board = "view_board", not used, for now.
var ViewType;
(function (ViewType) {
    ViewType["List"] = "view_list";
    ViewType["Gallery"] = "view_gallery";
    ViewType["Graph"] = "view_graph";
    ViewType["Table"] = "view_table";
    ViewType["Map"] = "view_map";
})(ViewType || (ViewType = {}));
var PaginationStyle;
(function (PaginationStyle) {
    PaginationStyle["Paged"] = "pagination_paged";
    PaginationStyle["InfiniteScroll"] = "pagination_infinite";
    PaginationStyle["NoPagination"] = "pagination_none";
})(PaginationStyle || (PaginationStyle = {}));
var DataSourceFieldType;
(function (DataSourceFieldType) {
    DataSourceFieldType["Text"] = "text";
    DataSourceFieldType["Number"] = "number";
    DataSourceFieldType["DateTime"] = "datetime";
    DataSourceFieldType["Currency"] = "currency";
    DataSourceFieldType["Percent"] = "percent";
    DataSourceFieldType["Link"] = "link";
    DataSourceFieldType["Email"] = "email";
    DataSourceFieldType["LatLng"] = "latlng";
    DataSourceFieldType["Address"] = "address";
})(DataSourceFieldType || (DataSourceFieldType = {}));
var SortBy;
(function (SortBy) {
    SortBy["RECENT"] = "recent";
    SortBy["OLDEST"] = "oldest";
})(SortBy || (SortBy = {}));
var PageTypes;
(function (PageTypes) {
    PageTypes["LIST"] = "LIST";
    PageTypes["DETAIL"] = "DETAIL";
    PageTypes["EDIT"] = "EDIT";
    PageTypes["CREATE"] = "CREATE";
    PageTypes["MARKER"] = "MARKER";
})(PageTypes || (PageTypes = {}));
function formattedField(data, displayType) {
    switch (displayType) {
        case DataSourceFieldType.Number:
            return Number(data).toString();
        case DataSourceFieldType.Percent:
            return Number(data).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
        case DataSourceFieldType.DateTime:
            var newDate = new Date(data);
            return newDate.toLocaleDateString();
        case DataSourceFieldType.Currency:
            var currencyFractionDigits = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "USD", // todo: somehow make this smarter
            }).resolvedOptions().maximumFractionDigits;
            var currencyString = Number(data).toLocaleString(undefined, {
                maximumFractionDigits: currencyFractionDigits
            });
            return currencyString;
        case DataSourceFieldType.Link:
        case DataSourceFieldType.Email:
        case DataSourceFieldType.Text:
        case DataSourceFieldType.Address:
        case DataSourceFieldType.LatLng:
        default:
            return data;
    }
}
function inferDataSourceFieldType(data) {
    // in the order of uniqueness -> Email, Link, DateTime, (Currency, Percent, Number), Text
    if (isEmail(data))
        return DataSourceFieldType.Email;
    if (isUri(data))
        return DataSourceFieldType.Link;
    if (isDate(data))
        return DataSourceFieldType.DateTime;
    // currency and percent are not inferrable
    if (!isNaN(parseFloat(data)))
        return DataSourceFieldType.Number;
    // todo(minjae): Add a address / lat lng detector
    return DataSourceFieldType.Text;
}
function isEmail(email) {
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}
function isUri(uriStr) {
    try {
        return Boolean(new URL(uriStr));
    }
    catch (_a) {
        return false;
    }
}
function isDate(dateStr) {
    return !isNaN(new Date(dateStr).getDate());
}
var template_cache = {
    "card_list": {
        _id: "",
        shortId: "card_list",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.List, ViewType.Gallery],
        name: "Card List",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/card_list.png"],
        description: "This template displays each row of data as a card, with a title, an image, and a link to redirect to.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        properties: {},
        pageContent: { "LIST": "<div class='container'><span class='title'>{{title}}</span><span class='image'><img src='{{thumbnail}}'/></span><span class='description'>{{description}}</span><span><a href='{{link}}'>{{linkText}}</a></span></div>" },
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
        componentProperties: {}
    },
    "standard_table": {
        _id: "",
        shortId: "standard_table",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Table],
        name: "Table",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/table.png"],
        description: "Table template shows your data in a tabular format.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        properties: {
            caption: {
                name: "Caption",
                description: "Use component's title as a caption for the table",
                default: false,
                type: "BOOLEAN"
            }
        },
        componentProperties: {}
    },
    "barchart": {
        _id: "",
        shortId: "barchart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Graph],
        name: "Bar Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/barchart.png"],
        description: "The bar chart template assumes each column in your data as a bar. Also, the data must be in numeric format to work.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        properties: {
            useFirstColumnAsLabels: {
                name: "Use First Column as Label",
                description: "Use first column of the data as labels for each dataset",
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
                name: "Show Vertically",
                description: "Chart graph in vertical orientation",
                default: false,
                type: "BOOLEAN"
            },
            roundedBars: {
                name: "Rounded Bars",
                description: "Make bars round",
                default: false,
                type: "BOOLEAN"
            },
            stackedBars: {
                name: "Stacked Bars",
                description: "Stack bars of the same group",
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
        previewImageUrls: ["/images/templates/piechart.png"],
        description: "Pie chart template uses the first two rows of your data to visualize the chart and its labels. Please note, data must be in numeric format to work.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        properties: {
            useFirstColumnAsLabels: {
                name: "Use First Column as Label",
                description: "Use first column of the data as labels for each dataset",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "pie"
        }
    },
    "doughnutchart": {
        _id: "",
        shortId: "doughnutchart",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Graph],
        name: "Doughnut Chart",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/piechart.png"],
        description: "Doughnut chart template uses the first two rows of your data to visualize the chart and its labels. Please note, data must be in numeric format to work.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        properties: {
            useFirstColumnAsLabels: {
                name: "Use First Column as Label",
                description: "Use first column of the data as labels for each dataset",
                default: true,
                type: "BOOLEAN"
            },
            showLegends: {
                name: "Show Legends",
                description: "Show legends of labels in the graph",
                default: true,
                type: "BOOLEAN"
            }
        },
        componentProperties: {
            chartType: "doughnut"
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
        previewImageUrls: ["/images/templates/linechart.png"],
        description: "Line chart template requires all non-label data to be in numeric format to work.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        pageContent: {},
        templateFields: {},
        properties: {
            useFirstColumnAsLabels: {
                name: "Use First Column as Label",
                description: "Use first column of the data as labels for each dataset",
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
                name: "Show Vertically",
                description: "Chart graph in vertical orientation",
                default: false,
                type: "BOOLEAN"
            },
            fill: {
                name: "Fill lines",
                description: "Fill area under the line",
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
        previewImageUrls: ["/images/templates/fine_dining_menu.png"],
        description: "This template displays data as a menu / catalog of items with prices.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        properties: {},
        pageContent: { "LIST": "<div class='container'><span class='name'>{{name}}</span><span class='description'>{{description}}</span><span class='price'>{{price}}</span></div>" },
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
        componentProperties: {}
    },
    "graphic_menu": {
        _id: "",
        shortId: "graphic_menu",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Gallery],
        name: "Graphic Menu",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/boxed_list.png", "/images/templates/boxed_menu.png"],
        description: "This template displays data as a menu / catalog of items with prices and images.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        properties: {},
        pageContent: { "LIST": "<div class='container'><span class='image'><img src='{{image}}'/></span><span class='name'>{{name}}</span><span class='price'>{{price}}</span><span class='description'>{{description}}</span></div>" },
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
        componentProperties: {}
    },
    "job_postings": {
        _id: "",
        shortId: "job_postings",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.List],
        name: "Job Postings",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/job_postings.png"],
        description: "This template displays each row of data as a card, with a title, an image, and a link to redirect to.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST],
        properties: {},
        pageContent: { "LIST": "<div class='container'><span class='title'><a href='{{link}}'>{{title}}</a></span><span class='description'>{{description}}</span></div>" },
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
        componentProperties: {}
    },
    "store_locator": {
        _id: "",
        shortId: "store_locator",
        compatibleWith: ["table_view"],
        compatibleDisplayType: [ViewType.Map],
        name: "Store Locator",
        ownerId: "",
        version: 1,
        previewImageUrls: ["/images/templates/job_postings.png"],
        description: "This template displays each row of data as a pinpoint on a map.",
        visibility: "PUBLIC",
        pages: [PageTypes.LIST, PageTypes.MARKER],
        properties: {},
        pageContent: {
            "LIST": "<div class='container'><span class='label'>{{index}}. {{label}}</span><span class='description'>{{description}}</span><span class='location'>{{location}}</span><a class='callout' href='{{calloutLink1}}'>{{calloutLinkText1}}</a></div>",
            "MARKER": "<div class='container'><span class='label'>{{index}}. {{label}}</span><a class='callout' href='{{calloutLink1}}'>{{calloutLinkText1}}</a></div>"
        },
        templateFields: {
            label: {
                name: "Label",
                description: "Label of the place marker",
                compatibleTypes: [], //empty for all
            },
            location: {
                name: "Location",
                description: "Address or latitude / longitude of the place marker",
                compatibleTypes: [DataSourceFieldType.Address, DataSourceFieldType.LatLng], //empty for all
            },
            description: {
                name: "Description",
                description: "(Optional) Description of the place marker",
                compatibleTypes: [], //empty for all
            },
            markerOverride: {
                name: "Marker Image",
                description: "(Optional) URL of the image to use for place marker",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            image: {
                name: "Main Image",
                description: "(Optional) URL of the image to use in the description of the place marker",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            calloutLink1: {
                name: "Callout Link",
                description: "(Optional) A link to call out to",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            calloutLinkText1: {
                name: "Callout Link Text",
                description: "(Optional) Text for the link to call out to",
                compatibleTypes: [],
            },
            calloutLink2: {
                name: "Second Callout Link",
                description: "(Optional) A second link to call out to",
                compatibleTypes: [DataSourceFieldType.Link],
            },
            calloutLinkText2: {
                name: "Second Callout Link Text",
                description: "(Optional) Text for the second link to call out to",
                compatibleTypes: [],
            }
        },
        componentProperties: {}
    },
};
var style_cache = {
    "muted": {
        _id: "",
        shortId: "muted",
        name: "Muted",
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart", "standard_table"],
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
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart"],
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
        compatibleWith: ["barchart", "piechart", "linechart", "doughnutchart", "standard_table"],
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
        compatibleWith: ["card_list"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Minimalistic look and feel for gallery-typed templates.",
        visibility: "PUBLIC",
        style: ".concise_gallery .container { display: inline-grid; padding: 10px; width: 300px; border: 1px solid #ddd; border-radius: 10px; margin: 5px; } .concise_gallery .container .title { font-size: 1.2 rem; font-weight: 600; }  .concise_gallery .container .image img { width: 100% } .concise_gallery .container .description { display: block } .concise_gallery .pagination a, .concise_gallery .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["concise_gallery"],
        colorTheme: ["#ddd"],
        properties: {},
        componentProperties: {}
    },
    "fine_dining": {
        _id: "",
        shortId: "fine_dining",
        name: "Fine Dining Menu",
        compatibleWith: ["formal_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Traditional look and feel for menu templates.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Castoro&display=swap'); .fine_dining .container { font-family: 'Castoro', serif; display: block; padding: 10px; text-align: center } .fine_dining .container .name { font-size: 20px; }  .fine_dining .container .price { font-size: 18px; display: block; margin-top: 5px; margin-bottom: 10px } .fine_dining .container .description { display: block } .fine_dining .pagination a, .fine_dining .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["fine_dining"],
        colorTheme: ["#000"],
        properties: {},
        componentProperties: {}
    },
    "contemporary_fine_dining": {
        _id: "",
        shortId: "contemporary_fine_dining",
        name: "Contemporary Sans",
        compatibleWith: ["formal_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Modern look and feel for fine dining menu templates.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Tenor+Sans&display=swap'); .contemporary_fine_dining .container { display: block; padding: 10px; text-align: center } .contemporary_fine_dining .container .name { font-family: 'Tenor Sans', sans-serif; font-size: 20px; } .contemporary_fine_dining .container .price { font-family: 'Tenor Sans', sans-serif; font-size: 18px; display: block; margin-top: 5px; margin-bottom: 10px } .contemporary_fine_dining .container .description { font-family: 'Playfair Display', serif; font-style: italic; display: block } .contemporary_fine_dining .pagination a, .contemporary_fine_dining .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["contemporary_fine_dining"],
        colorTheme: ["#000"],
        properties: {},
        componentProperties: {}
    },
    "healthy_five": {
        _id: "",
        shortId: "healthy_five",
        name: "Healthy Five",
        compatibleWith: ["graphic_menu"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Vibrant style for graphic menu templates with emphasis on item image.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .healthy_five .container { display: inline-block; width: 300px; padding: 10px; font-family: 'Open Sans', sans-serif; } .healthy_five .container .image img { display: block; max-width: 100%; height: auto; margin: 10px 0 5px 0; } .healthy_five .container .name { font-size: 20px; } .healthy_five .container .price { font-size: 18px; display: block; } .healthy_five .container .description { display: block } .healthy_five .pagination a, .healthy_five .pagination span { margin: 2px; padding: 3px; }",
        containerClassNames: ["healthy_five"],
        colorTheme: ["#000"],
        properties: {},
        componentProperties: {}
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
        properties: {},
        componentProperties: {}
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
        properties: {},
        componentProperties: {}
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
        properties: {},
        componentProperties: {}
    },
    "map_outback": {
        _id: "",
        shortId: "map_outback",
        name: "Outback",
        compatibleWith: ["store_locator"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Natural look and feel.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .map_outback { width: 100% } .map-control { width: 100%; height: 100%; display: inline-block; position: relative; max-width: 480px; vertical-align: top; overflow-y: scroll } .map-container { min-height: 300px; height: 100%; display: inline-block; width: calc(100% - 480px); position: relative; overflow: hidden } .map-control-entry { border-top: 1px solid #9ca5b3; padding: 10px; font-family: 'Open Sans', sans; } .map-control-entry .label { display: block; font-size: 20px; font-weight: 500; margin-bottom: 5px; } .map-control-entry .description { display: block; margin-bottom: 5px; font-size: 14px; } .map-control-entry .location { display: block; margin-bottom: 10px; font-size: 14px; } .map-control-entry .callout { display: inline-block; padding: 5px; border: 1px solid #a5b076; font-size: 14px; text-decoration: none; color: #000 }",
        containerClassNames: ["map_outback"],
        colorTheme: ["ae9e90", "a5b076", "93817c", "#ebe3cd", "#523735", "#f5f1e6", "c9b2a6"],
        properties: {},
        componentProperties: {},
        jsonContent: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]
    },
    "map_inverted": {
        _id: "",
        shortId: "map_inverted",
        name: "Inverted",
        compatibleWith: ["store_locator"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Designed to blend with darker color themes.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .map_inverted { width: 100% } .map-control { width: 100%; height: 100%; display: inline-block; position: relative; max-width: 480px; vertical-align: top; overflow-y: scroll } .map-container { min-height: 300px; height: 100%; display: inline-block; width: calc(100% - 480px); position: relative; overflow: hidden } .map-control-entry { border-top: 1px solid #746855; padding: 10px; font-family: 'Open Sans', sans; } .map-control-entry .label { display: block; font-size: 20px; font-weight: 500; margin-bottom: 5px; } .map-control-entry .description { display: block; margin-bottom: 5px; font-size: 14px; } .map-control-entry .location { display: block; margin-bottom: 10px; font-size: 14px; } .map-control-entry .callout { display: inline-block; padding: 5px; border: 1px solid #746855; font-size: 14px; text-decoration: none; color: #000 }",
        containerClassNames: ["map_inverted"],
        colorTheme: ["#746855", "#d59563", "#6b9a76", "#9ca5b3", "#17263c"],
        properties: {},
        componentProperties: {},
        jsonContent: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    },
    "map_silver": {
        _id: "",
        shortId: "map_silver",
        name: "Silver",
        compatibleWith: ["store_locator"],
        ownerId: "",
        version: 1,
        previewImageUrls: [],
        description: "Map is designed to be suppressed from the placemarks.",
        visibility: "PUBLIC",
        style: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); .map_silver { width: 100% } .map-control { width: 100%; height: 100%; display: inline-block; position: relative; max-width: 480px; vertical-align: top; overflow-y: scroll } .map-container { min-height: 300px; height: 100%; display: inline-block; width: calc(100% - 480px); position: relative; overflow: hidden } .map-control-entry { border-top: 1px solid #746855; padding: 10px; font-family: 'Open Sans', sans; } .map-control-entry .label { display: block; font-size: 20px; font-weight: 500; margin-bottom: 5px; } .map-control-entry .description { display: block; margin-bottom: 5px; font-size: 14px; } .map-control-entry .location { display: block; margin-bottom: 10px; font-size: 14px; } .map-control-entry .callout { display: inline-block; padding: 5px; border: 1px solid #746855; font-size: 14px; text-decoration: none; color: #000 }",
        containerClassNames: ["map_silver"],
        colorTheme: ["#746855", "#d59563", "#6b9a76", "#9ca5b3", "#17263c"],
        properties: {},
        componentProperties: {},
        jsonContent: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    }
};

export { DataSourceFieldType, PageTypes, PaginationStyle, SortBy, ViewComponentType, ViewType, formattedField, inferDataSourceFieldType, isDate, isEmail, isUri, style_cache, template_cache };
//# sourceMappingURL=library.es.js.map
