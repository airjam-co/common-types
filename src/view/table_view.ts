import { isDate, isEmail, isUri } from "../common/utils";
import { DataSourceFieldType } from "./DataSourceFieldType";

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

