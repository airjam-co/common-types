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
