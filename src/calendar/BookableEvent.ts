import { CalendarEvent } from "./CalendarEvent";

export interface BookableEvent extends CalendarEvent {
  quantityAvailable?: number;
}
