import { static_styles } from "./table_view/StaticStyleCache";
import { static_templates } from "./table_view/StaticTemplateCache";

// legacy libraries made for legacy table view component
export const style_cache = static_styles;
export const template_cache = static_templates;
export * from "./appointment";
export * from "./calendar";
export * from "./commerce";
export * from "./common";
export * from "./table_view";
export * from "./view";
