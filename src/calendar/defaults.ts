export const CALENDAR_CONFIG_ENDPOINT = '/s/calendar?id=';
export const CALENDAR_BOOK_ENDPOINT = '/s/calendar/book?id=';
export const CALENDAR_MY_RESERVATIONS_ENDPOINT = '/s/calendar/reservations?id=';
export const CALENDAR_RESOURCE_SEARCH_ENDPOINT = "/s/calendar/find?id=";
export const CALENDAR_RESOURCE_MY_RESOURCE_ENDPOINT = "/s/calendar/resource/";
export const CALENDAR_RESOURCE_MY_RESOURCES_ENDPOINT = "/s/calendar/resources/";
export const DEFAULT_DESCRIPTION_LENGTH_CUTOFF = 30;

// TODO deprecate this, not very i18n friendly
export const DEFAULT_TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
};

export const HOUR_ONLY: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
};

