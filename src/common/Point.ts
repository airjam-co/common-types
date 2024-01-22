export interface Point {
    type: "Point" | "Polygon"; // TODO Only polygon is supported to date
    coordinates: number[]; // IMPORTANT: GeoJSON orders coordinates as longitude first and latitude second
}