import { ComponentTranslation } from "./ComponentTranslation";
import { Translation } from "./Translation";

export function getClientMessage(translation: ComponentTranslation, locale: string, message: string): string | undefined {
    if (!translation.clientTranslations) return undefined;
    const lowerCaseLocale = locale.toLowerCase();
    const caseInsensitiveLocaleMap: {[id: string]: string} = {};
    Object.keys(translation.clientTranslations).forEach(l => {
        caseInsensitiveLocaleMap[l.toLowerCase()] = l;
    });
    if (!caseInsensitiveLocaleMap[lowerCaseLocale] || !translation.clientTranslations[caseInsensitiveLocaleMap[lowerCaseLocale]]) {
        if (!translation.clientTranslations[translation.defaultLocale]) return undefined;
        return getTranslation(translation.clientTranslations[translation.defaultLocale], message);
    }
    return getTranslation(translation.clientTranslations[caseInsensitiveLocaleMap[lowerCaseLocale]], message);
}

export function getTranslation(translation: Translation, message: string): string | undefined {
    if (!translation || !translation.messages || !translation.messages[message]) return undefined;
    return translation.messages[message];
}

export function mergeTranslation(base: Translation, override: Translation): Translation {
    const returning = JSON.parse(JSON.stringify(base)) as Translation;
    if (override.locale) returning.locale = override.locale;
    if (override.messages) {
        const overrideKeys = Object.keys(override.messages);
        if (!returning.messages) returning.messages = {};
        overrideKeys.forEach(k => {
            returning.messages[k] = override.messages[k];
        });
    }
    return returning;
}

export function negotiateLocale(translation: ComponentTranslation, locale?: string): string {
    // This function must return locale in its original casing
    let preferredLocale = translation.defaultLocale;
    if (!locale) return preferredLocale;
    const formattedLocale = locale.toLowerCase();

    const locales: {[loc: string]: string} = {};
    const languages: {[lang: string]: string} = {};
    translation.supportedLocales.forEach(loc => {
        const l = loc.toLowerCase();
        const lang = stripLanguageOnly(l);
        locales[l] = loc;
        languages[lang] = loc;
    });
    if (locales[formattedLocale]) return locales[formattedLocale];
    const lang = stripLanguageOnly(formattedLocale);
    if (languages[lang]) return languages[lang];
    // TODO -- support traditional vs simplified chinese
    return preferredLocale;
}

export function stripLanguageOnly(locale: string): string {
    const underscoreStrip = locale.split("_");
    if (underscoreStrip.length < 1) return locale;
    const localeParts = underscoreStrip[0].split("-");
    if (localeParts.length < 1) return locale;
    return localeParts[0];
}
