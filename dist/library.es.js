var ViewComponentType;
(function (ViewComponentType) {
    ViewComponentType["TableView"] = "table_view";
})(ViewComponentType || (ViewComponentType = {}));
var ViewType;
(function (ViewType) {
    ViewType["Board"] = "view_board";
    ViewType["List"] = "view_list";
    ViewType["Feed"] = "view_feed";
    ViewType["Gallery"] = "view_gallery";
    ViewType["Graph"] = "view_graph";
    ViewType["Table"] = "view_table";
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
})(DataSourceFieldType || (DataSourceFieldType = {}));

export { DataSourceFieldType, PaginationStyle, ViewComponentType, ViewType };
//# sourceMappingURL=library.es.js.map
