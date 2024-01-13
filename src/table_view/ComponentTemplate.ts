import { UnifiedModel } from "../common/UnifiedModel";
import { CodingLanguages } from "../common/CodingLanguages";
import { PageTypes } from "./PageTypes";
import { TableViewViewType } from "./TableViewViewType";
import { TemplateProperty } from "../view/TemplateProperty";
import { TemplateField } from "../view/TemplateField";
import { DataSourceType } from "../view/DataSourceType";

export interface ComponentTemplate extends UnifiedModel {
    shortId: string;
    compatibleWith: string[];
    compatibleDisplayType: TableViewViewType[];
    name: string;
    ownerId: string;
    version: number;
    previewImageUrls: string[];
    description: string;
    visibility: "PUBLIC" | "PRIVATE" | "PAID";
    pages: PageTypes[];
    properties: {[id: string]: TemplateProperty};
    pageContent: {[id: string]: string};
    templateFields: {[id: string]: TemplateField};
    componentProperties: {[id: string]: any};
    compatibleLanguages: CodingLanguages[];
    dataSourceType: DataSourceType;
}
