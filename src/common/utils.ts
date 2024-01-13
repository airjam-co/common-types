export function isEmail(email: string): boolean {
    const re: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

export function isUri(uriStr: string): boolean {
    try {
        return Boolean(new URL(uriStr));
    }
    catch {
        return false;
    }
}

export function isDate(dateStr: string): boolean {
    return !isNaN(new Date(dateStr).getDate());
}
