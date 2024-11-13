import { PaymentIntentDetail } from "../commerce/PaymentIntentDetail";
import { CalendarReservationPriceUnit } from "./CalendarReservationPriceUnit";

export interface EventReservationPaymentIntentDetail extends PaymentIntentDetail {
    priceUnit: CalendarReservationPriceUnit;
    durationInMin: number;
}
