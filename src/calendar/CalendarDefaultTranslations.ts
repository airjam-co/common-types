import { ComponentTranslation } from "../common/translations";
import { clientEnUs } from "../translations/calendar/client_en_us";
import { clientKoKr } from "../translations/calendar/client_ko_kr";
import { serverEnUs } from "../translations/calendar/server_en_us";
import { serverKoKr } from "../translations/calendar/server_ko_kr";

export const CALENDAR_DEFAULT_TRANSLATIONS: ComponentTranslation = {
    descriptions: {
        // client
        "select_time_slot": {
            description: "Header text for single day availabilities for a resource",
            example: "Select a time slot",
        },
        "select_end_time": {
            description: "Header text for single day availabilities for a resource, label for choosing the end time slot",
            example: "Select end time",
        },
        "select_time_back": {
            description: "Label for the back button for single day availabilities end time selector",
            example: "Go back",
        },
        "select_no_availability": {
            description: "Text to show when there is no available time slots on time selector interface",
            example: "The requested time frame has no available slots."
        },
        "time_zone": {
            description: "Text helper for choosing time zones",
            example: "Time zone",
        },
        "booking_success_modal_title": {
            description: "Title for the popup window that's shown when booking has been successfully created",
            example: "Booking confirmed",
        },
        "booking_pending_modal_title": {
            description: "Title for the popup window that's shown when booking has been successfully created, but the reservation is in pending state",
            example: "Reservation is pending",
        },
        "booking_success_modal_message": {
            description: "Main message for the popup window that's shown when booking has been successfully created",
            example: "You've booked ",
        },
        "reservation_id_label": {
            description: "Label to display reservation IDs",
            example: "Reservation ID",
        },
        "cost_total": {
            description: "Cost total",
            example: "Total",
        },
        "booking_success_modal_email_sent": {
            description: "Message to let users know a confirmation email has been sent",
            example: "The confirmation notice has been sent to your email.",
        },
        "close_modal": {
            description: "Close button text",
            example: "Close",
        },
        "booking_error_generic": {
            description: "Generic error messages when there was an error booking reservations",
            example: "There was an issue processing your booking. Please try again later.",
        },
        "booking_modal_payment_header": {
            description: "Header for payment information section in book reservation modal",
            example: "Payment Information",
        },
        "booking_modal_details_header": {
            description: "Header for reservation details section in book reservation modal",
            example: "Reservation",
        },
        "booking_modal_booker_information": {
            description: "Header for reservee information section in book reservation modal",
            example: "Your Information",
        },
        "booking_modal_name_field": {
            description: "Name field",
            example: "Name",
        },
        "booking_modal_name_field_required": {
            description: "Message to show when name field is empty and is required",
            example: "Please enter a name.",
        },
        "booking_modal_email_field": {
            description: "Email field",
            example: "Email",
        },
        "booking_modal_email_field_required": {
            description: "Message to show when email field is empty and is required",
            example: "Please enter a valid email address.",
        },
        "booking_modal_notes_field": {
            description: "Notes (additional info) field",
            example: "Notes",
        },
        "booking_modal_submit_button_label": {
            description: "Submit button for book reservation modal",
            example: "Book",
        },
        "free": {
            description: "text for showing that the item is free of cost",
            example: "FREE",
        },
        "redo_search_in_map": {
            description: "Redo search button on map interfaces",
            example: "Redo search in map",
        },
        "create_button_label": {
            description: "Label for the [Create Resource] action button",
            example: "Create",
        },
        "update_button_label": {
            description: "Label for the [Update Resource] action button",
            example: "Update",
        },
        "delete_button_label": {
            description: "Label for the [Delete Resource] action button",
            example: "Delete",
        },
        "delete_confirmation_message": {
            description: "Label for the [Resource Name] field",
            example: "Are you sure you want to permanently remove this space?",
        },
        "yes_button_label": {
            description: "Generic label for [yes] action",
            example: "Yes",
        },
        "no_button_label": {
            description: "Generic label for [no] action",
            example: "No",
        },

        "resource_name_label": {
            description: "Label for the [Resource Name] field",
            example: "Resource Name",
        },
        "resource_name_tip": {
            description: "Helper tip text for [Resource Name] field",
            example: "This is a name that your users will use to identify the resource. It can be things like name of the service agent, service type, event, and so on",
        },
        "resource_name_description": {
            description: "Descriptions for [Resource Name] field",
            example: "Enter the name of the resource",
        },
        "resource_name_placeholder": {
            description: "Default helper text for [Resource Name] field",
            example: "New Resource",
        },
        "resource_description_label": {
            description: "Label for the [Resource Description] field",
            example: "Resource Description",
        },
        "resource_description_tip": {
            description: "Helper tip text for [Resource Description] field",
            example: "This description is used to help your users understand the details of the resource they are booking",
        },
        "resource_description_description": {
            description: "Descriptions for [Resource Description] field",
            example: "Description of the resource",
        },
        "resource_description_placeholder": {
            description: "Default helper text for [Resource Description] field",
            example: "Describe your resource",
        },
        "static_address_label": {
            description: "Label for the [Static Address] field",
            example: "Static Address",
        },
        "static_address_tip": {
            description: "Helper tip text for [Static Address] field",
            example: "Enter address where the resource is located in",
        },
        "static_address_description": {
            description: "Descriptions for [Static Address] field",
            example: "Enter location of the resource",
        },
        "calendar_data_source_label": {
            description: "Label for the [Calendar Data Source] field",
            example: "Calendar Data Source",
        },
        "calendar_data_source_tip": {
            description: "Helper tip text for [Calendar Data Source] field",
            example: "You must log into AirJam using a related Google account and grant AirJam permission to view your calendars to see the list of your calendars from Google",
        },
        "calendar_data_source_description": {
            description: "Descriptions for [Calendar Data Source] field",
            example: "Select a calendar from the list on right to sync with an external calendar data source",
        },
        "booking_durations_label": {
            description: "Label for the [Booking Duration] field",
            example: "Booking Duration",
        },
        "booking_durations_tip": {
            description: "Helper tip text for [Booking Duration] field",
            example: "Tell us how long bookings should be for this resource",
        },
        "booking_durations_description": {
            description: "Descriptions for [Booking Duration] field",
            example: "Tell us how long bookings should be for this resource",
        },
        "availability_label": {
            description: "Label for the [Availability] field",
            example: "Availability",
        },
        "availability_tip": {
            description: "Helper tip text for [Availability] field",
            example: "You can optionally specify the time frame to allow your users to book this resource",
        },
        "availability_description": {
            description: "Descriptions for [Availability] field",
            example: "You can specify when your resource is available to book",
        },
        "quantity_available_label": {
            description: "Label for the [Quantity Available] field",
            example: "Quantity Available",
        },
        "quantity_available_tip": {
            description: "Helper tip text for [Quantity Available] field",
            example: "Slots can be number of seats available for the same time period or number of units of items to book, etc",
        },
        "quantity_available_description": {
            description: "Descriptions for [Quantity Available] field",
            example: "Specify how many slots are available for booking for each time frame",
        },
        "base_price_label": {
            description: "Label for the [Base Price] field",
            example: "Base Price",
        },
        "base_price_tip": {
            description: "Helper tip text for [Base Price] field",
            example: "This is a default price per booking and can be overridden from the admin interface",
        },
        "base_price_description": {
            description: "Descriptions for [Base Price] field",
            example: "Specify how much each unit of resource costs to book, type 0 for free to book resources",
        },
        "dynamic_pricing_label": {
            description: "Label for the [Dynamic Pricing] field",
            example: "Dynamic Pricing",
        },
        "dynamic_pricing_tip": {
            description: "Helper tip text for [Dynamic Pricing] field",
            example: "Select if you would like AI to predict and adjust pricing for your events based on demand",
        },
        "dynamic_pricing_description": {
            description: "Descriptions for [Dynamic Pricing] field",
            example: "Specify if you would like to use AI-based dynamic pricing",
        },
        "moderation_label": {
            description: "Label for the [Moderation] field",
            example: "Moderation",
        },
        "moderation_tip": {
            description: "Helper tip text for [Moderation] field",
            example: "For event moderation, please use the @airjam/calendar-admin library to expose moderation feature to the resource owners",
        },
        "moderation_description": {
            description: "Descriptions for [Moderation] field",
            example: "Specify if you would like the owner of the resources to moderate booking requests",
        },
        "book_on_label": {
            description: "Label for the [Book On] field",
            example: "Book On",
        },
        "book_on_tip": {
            description: "Helper tip text for [Book On] field",
            example: "Your resource can book events on either existing events, or on free time slots between existing events",
        },
        "book_on_description": {
            description: "Descriptions for [Book On] field",
            example: "Choose whether your users would book on free times or on existing events",
        },
        "past_events_label": {
            description: "Label for the [Past Events] field",
            example: "Past Events",
        },
        "past_events_tip": {
            description: "Helper tip text for [Past Events] field",
            example: "By default all resources only work on present and future events. Your past events processed previously, however, will still be shown for operational purposes",
        },
        "past_events_description": {
            description: "Descriptions for [Past Events] field",
            example: "Choose whether this resource should sync, process, and book on past events",
        },
        "operating_hours_label": {
            description: "Label for the [Operating Hours] field",
            example: "Operating Hours",
        },
        "operating_hours_tip": {
            description: "Helper tip text for [Operating Hours] field",
            example: "Operating hours restrict the times this resource is available by the time of the day by day of the week. Think of this as store hours",
        },
        "operating_hours_description": {
            description: "Descriptions for [Operating Hours] field",
            example: "You can specify operating hours for this resource by day of the week",
        },

        // Dropdown options
        "calendar_data_source_none": {
            description: "[None] option in Calendar data source selector",
            example: "e.g. None, Google, Outlook, etc",
        },
        "calendar_data_source_google_calendar": {
            description: "[Google Calendar] option in Calendar data source selector",
            example: "e.g. None, Google, Outlook, etc",
        },
        "calendar_data_source_cal_dav": {
            description: "[CalDAV] option in Calendar data source selector",
            example: "e.g. None, Google, Outlook, etc",
        },
        "calendar_data_source_outlook": {
            description: "[Outlook] option in Calendar data source selector",
            example: "e.g. None, Google, Outlook, etc",
        },
        "moderation_option_do_moderate": {
            description: "[Moderate] option for dropdown for selection moderation options",
            example: "This is the text for the option to let users choose to moderate their resources",
        },
        "moderation_option_do_not_moderate": {
            description: "[Do not moderate] option for dropdown for selection moderation options",
            example: "This is the text for the option to let users choose not to moderate their resources",
        },
        "operating_hours_short_sunday": {
            description: "Sunday",
            example: "Sun",
        },
        "operating_hours_short_monday": {
            description: "Monday",
            example: "Mon",
        },
        "operating_hours_short_tuesday": {
            description: "Tuesday",
            example: "Tue",
        },
        "operating_hours_short_wednesday": {
            description: "Wednesday",
            example: "Wed",
        },
        "operating_hours_short_thursday": {
            description: "Thursday",
            example: "Thu",
        },
        "operating_hours_short_friday": {
            description: "Friday",
            example: "Fri",
        },
        "operating_hours_short_saturday": {
            description: "Saturday",
            example: "Sat",
        },
        "seconds": {
            description: "Plural word [seconds]",
            example: "seconds",
        },
        "minutes": {
            description: "Plural word [minutes]",
            example: "minutes",
        },
        "hours": {
            description: "Plural word [hours]",
            example: "hours",
        },
        "days": {
            description: "Plural word [days]",
            example: "days",
        },
        "weeks": {
            description: "Plural word [weeks]",
            example: "weeks",
        },
        "months": {
            description: "Plural word [months]",
            example: "months",
        },
        "years": {
            description: "Plural word [years]",
            example: "years",
        },
        "base_pricing_fixed_option": {
            description: "[event] option in base pricing dropdown",
            example: "event",
        },
        "base_pricing_increment_option": {
            description: "[increment] option in base pricing dropdown",
            example: "increment",
        },
        "book_on_free_slots_option": {
            description: "Option in [Book On] option to let users choose to book on free slots between events in calendar",
            example: "Book on free slots between events",
        },
        "book_on_existing_events_option": {
            description: "Option in [Book On] option to let users choose to book only on existing events in calendar",
            example: "Book on existing events",
        },
        "book_exclusively_on_existing_events_option": {
            description: "Option in [Book On] option to let users choose to book only on existing events, only one booking per existing event instance",
            example: "Book exclusively on existing events",
        },


        // Freeform sentence translations
        "freeform_operating_hours_hour_duration_phrase": {
            description: "The phrase that goes between start time and end time",
            example: "to",
        },
        "freeform_booking_duration_sentence_start": {
            description: "The preamble phrase for the radio options for choosing booking duration types",
            example: "Duration for each booking is",
        },
        "freeform_booking_duration_fixed_option_start": {
            description: "Beginning text for [fixed] option for the booking duration radio options",
            example: "fixed,",
        },
        "freeform_booking_duration_fixed_option_postfix": {
            description: "Ending text for [fixed] option for the booking duration radio options",
            example: "long.",
        },
        "freeform_booking_duration_flexible_option_start": {
            description: "Beginning text for [flexible] option for the booking duration radio options",
            example: "flexible. Each booking must be at least",
        },
        "freeform_booking_duration_flexible_option_duration_phrase": {
            description: "Phrase that goes in between two durations for [flexible] option for the booking duration radio options",
            example: "long and at most",
        },
        "freeform_booking_duration_flexible_option_increment_pretext": {
            description: "Phrase that goes before the increment option and after the start and end durations for the [flexible] option for the booking duration radio options",
            example: "long, with time increments of",
        },
        "freeform_booking_duration_flexible_option_buffer_time_text_pretext": {
            description: "Phrase that goes before durations for the buffer time for the [flexible] option for the booking duration radio options",
            example: "There must be at least",
        },
        "freeform_booking_duration_flexible_option_buffer_time_text_between_text": {
            description: "Phrase that goes between two durations for the buffer time for the [flexible] option for the booking duration radio options",
            example: "of free time before and",
        },
        "freeform_booking_duration_flexible_option_buffer_time_text_post_text": {
            description: "Phrase that goes after the durations for the buffer time for the [flexible] option for the booking duration radio options",
            example: "after the booking time to book.",
        },
        "freeform_availability_start_time_pretext": {
            description: "Phrase that goes before the start time date picker",
            example: "People can book this resource from",
        },
        "freeform_availability_start_time_post_text": {
            description: "Phrase that goes after the start time date picker",
            example: "and can schedule",
        },
        "freeform_availability_anytime_option": {
            description: "Phrase for not limiting availability start date",
            example: "indefinitely into the future.",
        },
        "freeform_availability_specific_time_anytime": {
            description: "anytime",
            example: "indefinitely into the future.",
        },
        "freeform_availability_specific_time_option_pretext": {
            description: "Text that goes before the date selector for choosing specific time for availability end date",
            example: "until",
        },
        "freeform_availability_specific_time_option_placeholder_text": {
            description: "Placeholder text for date selector for choosing specific time for availability end date",
            example: "a specified time",
        },
        "freeform_availability_rolling_time_option_post_text": {
            description: "Text that goes after the duration for choosing rolling time for availability end date",
            example: "into the future.",
        },
        "freeform_quantity_available_pre_text": {
            description: "Text that goes before the quantity available input",
            example: "There are",
        },
        "freeform_quantity_available_post_text": {
            description: "Text that goes after the quantity available input",
            example: "units of resources available at any given time.",
        },
        "freeform_base_price_pre_text": {
            description: "Text that goes before the base price selector",
            example: "Each unit costs",
        },
        "freeform_base_price_pricing_unit_selector": {
            description: "Text that goes between the base price selector and pricing unit selector",
            example: "per",
        },
        "freeform_past_events_option_description": {
            description: "Description text for the radio option for processing past events",
            example: "This resource:",
        },
        "freeform_past_events_option_process_past_event_option": {
            description: "Text for the radio option for processing past events",
            example: "Processes past events.",
        },
        "freeform_past_events_option_do_not_process_past_event_option": {
            description: "Text for the radio option for not processing past events",
            example: "Does not process past events.",
        },
        "freeform_operating_hours_has_operating_hours_selector_description": {
            description: "Description text for the options selector for choosing whether this resource has operating hours or not.",
            example: "This resource operates:",
        },
        "freeform_operating_hours_no_operating_hours_option": {
            description: "Text for the option for disabling operating hour restrictions",
            example: "all day and night.",
        },
        "freeform_operating_hours_has_operating_hours_option": {
            description: "Text for the option for enabling operating hour restrictions",
            example: "with specific operating hours.",
        },

        "freeform_operating_hours_daily_variance_selector_description": {
            description: "Description text for choosing whether the operating hours differ by day of the week.",
            example: "Operating hours:",
        },
        "freeform_operating_hours_daily_variance_no_variance_option": {
            description: "Text for the option for specifying that operating hours are the same every day",
            example: "are same every day.",
        },
        "freeform_operating_hours_daily_variance_has_daily_variance_option": {
            description: "Text for the option for specifying that operating hours are not the same every day",
            example: "varies day by day.",
        },

        // server
        "foo": {
            description: "Very nice text",
            example: "hello my name is whatever",
        },
        "bar": {
            description: "Very nice text2",
            example: "hello my name is whatever2",
        },
    },
    defaultLocale: "en-US",
    supportedLocales: ["en-US", "ko-KR"],
    clientTranslations: {
        "en-US": clientEnUs,
        "ko-KR": clientKoKr
    },
    serverTranslations: {
        "en-US": serverEnUs,
        "ko-KR": serverKoKr
    }
};
