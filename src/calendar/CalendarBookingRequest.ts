export interface CalendarBookingRequest {
  id: string; // calendar id
  ownerAuthId: string; // requester's auth id
  startTimeUtc: string;
  endTimeUtc: string;
  resourceId: string;
  name: string;
  email: string;
  comment: string;
  eventId: string;
  paymentIntentId: string;
  locale: string;
  timezone: string;
}
