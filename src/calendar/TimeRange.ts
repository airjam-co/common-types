export interface TimeRange {
  timeOfDayOnly: boolean; // if true, only time portion of the Date objects are used.
  startTimeUtc: Date;
  endTimeUtc: Date;
}
