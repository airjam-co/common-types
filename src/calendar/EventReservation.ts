import { PaymentProcessor, PaymentStatus } from "../commerce";
import { UnifiedModel } from "../common";
import { EventReservationPaymentIntentDetail } from "./EventReservationPaymentIntentDetail";
import { EventReservationStatus } from "./EventReservationStatus";

// each entry per each reservation
export interface EventReservation extends UnifiedModel, EventReservationPaymentIntentDetail {
    eventId: string;
    reservationId: string; // uniquely identifies this reservation
    ownerId: string; // person who created this reservation, optional
    ownerAuthId: string; // auth id of the person who created this reservation. used if the calendar is managed using authentication system
    ownerName: string;
    ownerEmail: string;
    calendarComponentId: string; // user friendly id
    componentResourceId: string; // human friendly id of the specific resource within the calendar which this event belongs to.
    resourceName: string; // used just for convenience only
    startTimeUtc: Date;
    startTimezone: string;
    endTimeUtc: Date;
    endTimezone: string;
    title: string;
    durationInMinutes: number; // used just for convenience
    location: string; // used for convenience
    reservationModerationKey: string;
    notes: string; // optional notes or comments that the reservee left behind for the reservation
    reservationCount: number; // how many spots this reservation covers
    seats: string[]; // array of seats this reservation contains.
    status: EventReservationStatus; // turn this into an enum, yeah?
    paymentStatus: PaymentStatus;
    paymentTransactionId: string;
}
