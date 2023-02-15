(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.commonTypes = {}));
})(this, (function (exports) { 'use strict';

    exports.ViewComponentType = void 0;
    (function (ViewComponentType) {
        ViewComponentType["TableView"] = "table_view";
    })(exports.ViewComponentType || (exports.ViewComponentType = {}));
    exports.ViewType = void 0;
    (function (ViewType) {
        ViewType["Board"] = "view_board";
        ViewType["List"] = "view_list";
        ViewType["Gallery"] = "view_gallery";
        ViewType["Graph"] = "view_graph";
        ViewType["Table"] = "view_table";
    })(exports.ViewType || (exports.ViewType = {}));
    exports.PaginationStyle = void 0;
    (function (PaginationStyle) {
        PaginationStyle["Paged"] = "pagination_paged";
        PaginationStyle["InfiniteScroll"] = "pagination_infinite";
        PaginationStyle["NoPagination"] = "pagination_none";
    })(exports.PaginationStyle || (exports.PaginationStyle = {}));
    exports.DataSourceFieldType = void 0;
    (function (DataSourceFieldType) {
        DataSourceFieldType["Text"] = "text";
        DataSourceFieldType["Number"] = "number";
        DataSourceFieldType["DateTime"] = "datetime";
        DataSourceFieldType["Currency"] = "currency";
        DataSourceFieldType["Percent"] = "percent";
        DataSourceFieldType["Link"] = "link";
        DataSourceFieldType["Email"] = "email";
    })(exports.DataSourceFieldType || (exports.DataSourceFieldType = {}));
    exports.SortBy = void 0;
    (function (SortBy) {
        SortBy["RECENT"] = "recent";
        SortBy["OLDEST"] = "oldest";
    })(exports.SortBy || (exports.SortBy = {}));
    var template_cache = {
        "card_list": {
            _id: "",
            shortId: "card_list",
            compatibleWith: ["table_view"],
            compatibleDisplayType: [exports.ViewType.List, exports.ViewType.Gallery],
            name: "Card List",
            ownerId: "",
            version: 1,
            previewImageUrls: [],
            description: "card list.",
            visibility: "PUBLIC",
            pages: ["LIST"],
            properties: {},
            templateContent: "<div class='container'><span class='title'>{{title}}</span><span class='image'><img src='{{thumbnail}}'/></span><span class='description'>{{description}}</span><span><a href='{{link}}'>{{linkText}}</a></span></div>",
            templateFields: {
                title: {
                    name: "Title",
                    description: "title",
                    compatibleTypes: [], //empty for all
                },
                link: {
                    name: "Link",
                    description: "Link to open",
                    compatibleTypes: [exports.DataSourceFieldType.Link]
                },
                linkText: {
                    name: "Link Text",
                    description: "Link text",
                    compatibleTypes: [],
                },
                thumbnail: {
                    name: "Thumbnail image",
                    description: "thumbnail image",
                    compatibleTypes: [exports.DataSourceFieldType.Link],
                },
                description: {
                    name: "Description",
                    description: "descriptions",
                    compatibleTypes: [],
                }
            },
            componentProperties: {}
        },
        "standard_table": {
            _id: "",
            shortId: "standard_table",
            compatibleWith: ["table_view"],
            compatibleDisplayType: [exports.ViewType.Table],
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
            componentProperties: {}
        },
        "barchart": {
            _id: "",
            shortId: "barchart",
            compatibleWith: ["table_view"],
            compatibleDisplayType: [exports.ViewType.Graph],
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
            compatibleDisplayType: [exports.ViewType.Graph],
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
            compatibleDisplayType: [exports.ViewType.Graph],
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
    };
    var style_cache = {
        "muted": {
            _id: "",
            shortId: "muted",
            name: "Muted",
            compatibleWith: ["barchart"],
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
            compatibleWith: ["barchart"],
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
            compatibleWith: ["barchart"],
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
            compatibleWith: ["card_list"],
            ownerId: "",
            version: 1,
            previewImageUrls: [],
            description: "Concision is the key.",
            visibility: "PUBLIC",
            style: ".concise_gallery .container { display: inline-grid; padding: 10px; width: 300px; border: 1px solid #ddd; border-radius: 10px; margin: 5px; } .concise_gallery .container .title { font-size: 1.2 rem; font-weight: 600; }  .concise_gallery .container .image img { width: 100% } .concise_gallery .container .description { display: block } .concise_gallery .pagination a, .concise_gallery .pagination span { margin: 2px; padding: 3px; }",
            containerClassNames: ["concise_gallery"],
            colorTheme: ["#ddd"],
            properties: {},
            componentProperties: {}
        }
    };

    exports.style_cache = style_cache;
    exports.template_cache = template_cache;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library.js.map
