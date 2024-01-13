import { UnifiedModel } from "../common/UnifiedModel";

export interface CalendarReservationFrame extends UnifiedModel {
    wholeDay: boolean;
    startMinute: number;
    endMinute: number;
}
