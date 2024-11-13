import { ReservationModeration } from "./ReservationModeration";
import { CalendarReservationPriceUnit } from "./CalendarReservationPriceUnit";
import { Point } from "../common/Point";
import { CalendarResourceMedia } from "./CalendarResourceMedia";
import { AuthenticatedIdentity, UnifiedModel } from "../common";

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

    currency: string;
    locale: string;
    customFields: any;
}
