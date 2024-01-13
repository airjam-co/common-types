import { DataSourceFieldType } from "./DataSourceFieldType";

export interface TemplateField {
    name: string;
    description: string;
    compatibleTypes: DataSourceFieldType[];
}
