import { CalendarReservationFrame } from "./CalendarReservationFrame";
import CalendarResourceOperatingHoursGrouping from "./CalendarResourceOperatingHoursGrouping";
import CalendarResourceOperatingHoursType from "./CalendarResourceOperatingHoursType";
import TimeUnit from "../common/TimeUnit";
import { UnifiedModel } from "../common/UnifiedModel";
import { ReservationModeration } from "./ReservationModeration";
import { CalendarBookOn } from "./CalendarBookOn";
import { CalendarBookingUnit } from "./CalendarBookingUnit";
import { CalendarDataProvider } from "./CalendarDataProvider";
import { CalendarReservationPriceUnit } from "./CalendarReservationPriceUnit";
import { CalendarEventReservableUntilType } from "./CalendarEventReservableUntilType";

export interface CalendarResource extends UnifiedModel {
    // ---- general info about the resource itself
    name: string; // name of the resource
    description: string; // public facing description of the resource
    provider: CalendarDataProvider; // google, etc
    providerId: string; // provider's calendar identifier
    quantityAvailable: number; // amount of slots available per each temporal time frame.
    moderation: ReservationModeration;

    // 1. fixed units of time (1 hour), 2. variable specifiable units of time.
    bookingUnit: CalendarBookingUnit;
    bookOn: CalendarBookOn;

    // Booking duration logic -- fixed units
    bookingDurationInMin: number;

    // Booking duration logic -- variable units of time
    minimumBookingDurationInMin: number;
    maximumBookingDurationInMin: number;
    bookingIncrementsInMin: number;

    staticPrice: number; // in whatever the local currency is. This is price for booking or increment.
    staticPriceUnit: CalendarReservationPriceUnit;

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
