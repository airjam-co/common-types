import { UnifiedModel } from "../common/UnifiedModel";

export interface CalendarEvent extends UnifiedModel {
    ownerId: string; // owner of this event
    ownerAuthId: string; // owner's auth id
    calendarComponentId: string; // user friendly id
    componentResourceId: string; // human friendly id of the specific resource within the calendar which this event belongs to.
    resourceName: string; // hydrated only when this struct is used for showing event details -- todo subclass this
    CalendarInstanceId: string;
    eventId: string;
    startTimeUtc: Date;
    startTimezone: string;
    endTimeUtc: Date;
    endTimezone: string;
    title: string;
    description: string;
    location: string;
    durationInMinutes: number;
    attendees: any[];
    isAllDay: boolean;
    isRecurring: boolean;
    status: string;
    calculatedStartTimeUtc: Date;
    calculatedRecurrenceEndTimeUtc: Date; // for storage and query purposes only
    rrule: string[]; // string format recurrence rule in RRULE format
    // recurringRule: CalendarRecurringRule;

    sendUpdates: string;

    initiatorAuthId: string; // this is the email or auth id or airjam id of the person who initiated the event booking. this contact info is used to modify and cancel events.
}
