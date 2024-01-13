import { UnifiedModel } from "../common/base";
import { isDate, isEmail, isUri } from "../common/utils";

export enum DataSourceType {
    SINGLE = "SINGLE",
    JOIN = "JOIN"
}

export enum DataSourceFieldType {
    Text = "text",
    Number = "number",
    DateTime = "datetime",
    Currency = "currency",
    Percent = "percent",
    Link = "link",
    Email = "email",
    LatLng = "latlng",
    Address = "address",
    Boolean = "boolean"
}

export interface DataSourceField {
    columnIdx: number; // for tabular data sources
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
    type: ("BOOLEAN" | "NUMBER" | "COLOR" | "LIST" | "MULTI" | "TEXT" );
    advancedProperty?: boolean;
    tab?: string;
    multiple?: boolean;
    limit?: number;
    values?: any[]; // set of values for custom multi-option entries.
}

export interface TemplateField {
    name: string;
    description: string;
    compatibleTypes: DataSourceFieldType[];
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
    properties: {[id: string]: TemplateProperty};
    componentProperties: {[id: string]: any};
}

export function inferDataSourceFieldType(data: string): DataSourceFieldType {
    // in the order of uniqueness -> Email, Link, DateTime, (Currency, Percent, Number), Text
    if (isEmail(data)) return DataSourceFieldType.Email;
    if (isUri(data)) return DataSourceFieldType.Link;
    if (isDate(data)) return DataSourceFieldType.DateTime;
    // currency and percent are not inferrable
    if (!isNaN(Number(data))) return DataSourceFieldType.Number;
    // todo(minjae): Add a address / lat lng detector
    return DataSourceFieldType.Text;
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
        case DataSourceFieldType.Address:
        case DataSourceFieldType.LatLng:
        default:
            return data;
    }
}

