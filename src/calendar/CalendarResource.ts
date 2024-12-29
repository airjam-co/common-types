import { ReservationModeration } from "./ReservationModeration";
import { CalendarReservationPriceUnit } from "./CalendarReservationPriceUnit";
import { Point } from "../common/Point";
import { CalendarResourceMedia } from "./CalendarResourceMedia";
import { AuthenticatedIdentity, TimeUnit, UnifiedModel } from "../common";
import { CalendarEventReservableUntilType } from "./CalendarEventReservableUntilType";

export interface CalendarResource extends UnifiedModel {
    // ---- general info about the resource itself
    calendarComponentId: string; // ID of the corresponding calendar component, can be empty if resource is nested within the calendar itself
    shortId: string; // Used only to generate a human-readable link for resource details
    name: string; // name of the resource
    description: string; // public facing description of the resource
    media: CalendarResourceMedia[];
    timezone: string;
    quantityAvailable: number; // amount of slots available per each temporal time frame.
    moderation: ReservationModeration;

    // User-managed resources
    ownerId: string; // person who created this reservation, optional
    ownerName: string;
    ownerEmail: string;
    ownerIdentity: AuthenticatedIdentity; // will be stripped down when called publicly

    staticPrice: number; // in whatever the local currency is. This is price for booking or increment.
    staticPriceUnit: CalendarReservationPriceUnit;
    staticPriceCurrency: string;
    approximateLocation: Point; // lng, lat

    reservableUntilType: CalendarEventReservableUntilType;
    reservableUntil: number; // duration into the future to show calendar for, 0 for unlimited
    reservableUntilUnit: TimeUnit;
    reservableUntilInMin: number; // do not manually populate -- server auto calculates duration in quantities of minutes
    availabilityStartTime: Date;
    availabilityEndTime: Date;
    processPastEvents: boolean; // if true, this resource and sync, process, and book events occurred in past


    currency: string;
    locale: string;
    customFields: any;
}
