import { UnifiedModel } from "../common";
import { BookingResource } from "./BookingResource";

export interface CalendarBookingAvailability extends UnifiedModel {
    preferredTimezone: string;
    resources: BookingResource[];
}
