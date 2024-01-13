import { static_styles } from "./table_view/static_style_cache";
import { static_templates } from "./table_view/static_template_cache";
import { TemplateStyle } from "./view/template";

export interface MapStyle extends TemplateStyle {
}

// legacy libraries made for legacy table view component
export const style_cache = static_styles;
export const template_cache = static_templates;