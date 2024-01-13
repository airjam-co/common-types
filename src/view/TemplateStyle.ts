import { UnifiedModel } from "../common/UnifiedModel";
import { TemplateProperty } from "./TemplateProperty";

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
