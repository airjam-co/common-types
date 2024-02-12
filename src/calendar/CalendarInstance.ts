import { UnifiedModel } from "../common";

export interface CalendarInstance extends UnifiedModel {
    projectId: string; // read only for now
    name: string; // required
    summary: string;
    ownerId: string; // read only
    calendarComponentId: string; // user friendly id
    id: string; // provider's id for the calendar
    description: string; // provider's description for the calendar
    timezone: string; // provider's timezone information
    nextSyncToken: string; // provider's event sync token.
    // instance-level overrides
}
