import { TemplateStyle } from "./view/template";
export interface MapStyle extends TemplateStyle {
}
export declare const style_cache: {
    [id: string]: TemplateStyle;
};
export declare const template_cache: {
    [id: string]: import("./table_view/table_view").ComponentTemplate;
};
