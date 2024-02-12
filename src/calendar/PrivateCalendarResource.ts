import { CalendarBookOn } from "./CalendarBookOn";
import { CalendarResource } from "./CalendarResource";
import { Point, TimeUnit } from "../common";
import { CalendarResourceOperatingHoursGrouping } from "./CalendarResourceOperatingHoursGrouping";
import { CalendarEventReservableUntilType } from "./CalendarEventReservableUntilType";
import { CalendarResourceOperatingHoursType } from "./CalendarResourceOperatingHoursType";
import { CalendarDataProvider } from "./CalendarDataProvider";
import { CalendarBookingUnit } from "./CalendarBookingUnit";
import { CalendarReservationFrame } from "./CalendarReservationFrame";

export interface PrivateCalendarResource extends CalendarResource {
    provider: CalendarDataProvider; // google, etc
    providerId: string; // provider's calendar identifier
    ownerAuthId: string; // used if the calendar is managed using authentication system
    status: string; // either "published" or "hidden"
    deleted: boolean; // soft-delete

    // 1. fixed units of time (1 hour), 2. variable specifiable units of time.
    bookingUnit: CalendarBookingUnit;
    bookOn: CalendarBookOn;

    // Booking duration logic -- fixed units
    bookingDurationInMin: number;

    // Booking duration logic -- variable units of time
    minimumBookingDurationInMin: number;
    maximumBookingDurationInMin: number;
    bookingIncrementsInMin: number;

    staticLocation: Point; // lat, lng
    staticAddress: google.maps.places.PlaceResult;
    // staticAddress: PostalAddress; --> make this
    // TODO pictures

    reservableUntilType: CalendarEventReservableUntilType;
    reservableUntil: number; // duration into the future to show calendar for, 0 for unlimited
    reservableUntilUnit: TimeUnit;
    reservableUntilInMin: number; // do not manually populate -- server auto calculates duration in quantities of minutes
    availabilityStartTime: Date;
    availabilityEndTime: Date;
    processPastEvents: boolean; // if true, this resource and sync, process, and book events occurred in past

    bufferBeforeInMinutes: number;
    bufferAfterInMinutes: number;

    // reservable time frame within a given day
    operatingHoursType: CalendarResourceOperatingHoursType;
    operatingHoursGrouping: CalendarResourceOperatingHoursGrouping; // if same, all hours are found in same day struct
    operatingDays: number[];

    // 0 - Sunday ~ 6 - Saturday
    operatingHoursByDay: {[dayOfWeek: number]: CalendarReservationFrame[]};
    generalOperatingHours: CalendarReservationFrame[];
}

export const toPublicResource = (resource: PrivateCalendarResource) => {
    return {
        _id: resource._id,
        createdAt: resource.createdAt,
        updatedAt: resource.updatedAt,
        calendarComponentId: resource.calendarComponentId,
        shortId: resource.shortId,
        name: resource.name,
        media: resource.media,
        description: resource.description,
        timezone: resource.timezone,
        quantityAvailable: resource.quantityAvailable,
        moderation: resource.moderation,
        ownerId: resource.ownerId,
        ownerName: resource.ownerName,
        ownerEmail: resource.ownerEmail,
        staticPrice: resource.staticPrice,
        staticPriceUnit: resource.staticPriceUnit,
        staticPriceCurrency: resource.staticPriceCurrency,
        approximateLocation: reducePointPrecision(resource.staticLocation),
    } as CalendarResource;
};

export const reducePointPrecision = (point: Point, precision: number = 5) => {
    if (!point || !point.coordinates || !point.coordinates.length) return undefined;
    const coords: number[] = point.coordinates.map((v) => parseFloat(v.toFixed(precision)));
    return {
        type: point.type,
        coordinates: coords,
    } as Point;
};
