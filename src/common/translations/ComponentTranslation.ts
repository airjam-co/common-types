import { Translation } from "./Translation";
import { TranslationDescription } from "./TranslationDescription";

export interface ComponentTranslation {
    descriptions: {[key: string]: TranslationDescription};
    clientTranslations: {[locale: string]: Translation};
    serverTranslations: {[locale: string]: Translation};
    defaultLocale: string;
    supportedLocales: string[]; // note default locale will be regarded as supported, too
}