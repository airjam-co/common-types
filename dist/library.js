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
        ViewType["Feed"] = "view_feed";
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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library.js.map
