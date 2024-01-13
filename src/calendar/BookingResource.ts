import { UnifiedModel } from "../common";
import { BookableEvent } from "./BookableEvent";
import { CalendarBookOn } from "./CalendarBookOn";
import { CalendarBookingUnit } from "./CalendarBookingUnit";
import { CalendarReservationFrame } from "./CalendarReservationFrame";
import { CalendarReservationPriceUnit } from "./CalendarReservationPriceUnit";
import CalendarResourceOperatingHoursGrouping from "./CalendarResourceOperatingHoursGrouping";
import CalendarResourceOperatingHoursType from "./CalendarResourceOperatingHoursType";
import { TimeRange } from "./TimeRange";

export interface BookingResource extends UnifiedModel {
    name: string; // name of the resource
    description: string; // public facing description of the resource
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
    bufferBeforeInMinutes: number;
    bufferAfterInMinutes: number;

    unavailableTimes: TimeRange[];
    availableTimes: TimeRange[];
    mergedEventTimes: TimeRange[];
    availableEvents: BookableEvent[];

    // reservable time frame within a given day
    operatingHoursType: CalendarResourceOperatingHoursType;
    operatingHoursGrouping: CalendarResourceOperatingHoursGrouping; // if same, all hours are found in same day struct
    operatingDays: number[];

    // 0 - Sunday ~ 6 - Saturday
    operatingHoursByDay: {[dayOfWeek: number]: CalendarReservationFrame[]};
    generalOperatingHours: CalendarReservationFrame[];
    timezone: string;
    processPastEvents: boolean;
}
