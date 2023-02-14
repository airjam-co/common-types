var ViewComponentType;
(function (ViewComponentType) {
    ViewComponentType["TableView"] = "table_view";
})(ViewComponentType || (ViewComponentType = {}));
var ViewType;
(function (ViewType) {
    ViewType["Board"] = "view_board";
    ViewType["List"] = "view_list";
    ViewType["Feed"] = "view_feed";
})(ViewType || (ViewType = {}));
var PaginationStyle;
(function (PaginationStyle) {
    PaginationStyle["Paged"] = "pagination_paged";
    PaginationStyle["InfiniteScroll"] = "pagination_infinite";
    PaginationStyle["NoPagination"] = "pagination_none";
})(PaginationStyle || (PaginationStyle = {}));
var TableViewStyle;
(function (TableViewStyle) {
    TableViewStyle["List"] = "table_view_list";
    TableViewStyle["Gallery"] = "table_view_gallery";
    TableViewStyle["Graph"] = "table_view_graph";
    TableViewStyle["Table"] = "table_view_table";
})(TableViewStyle || (TableViewStyle = {}));
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

export { DataSourceFieldType, PaginationStyle, TableViewStyle, ViewComponentType, ViewType };
//# sourceMappingURL=library.es.js.map
