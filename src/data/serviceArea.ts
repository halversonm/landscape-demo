/** Towns Cedar & Stone works in, plus the pins drawn on the area map. */
export const serviceAreas = [
  "Minneapolis",
  "St. Paul",
  "Edina",
  "St. Louis Park",
  "Woodbury",
  "Roseville",
  "Bloomington",
  "Woodbury",
  "Blaine",
  "Shoreview",
];

/**
 * Map pins. `x`/`y` (480×340 viewBox) drive the stylized SVG fallback used
 * when no Google Maps API key is configured; `lat`/`lng` drive the real
 * Google Map.
 */
export const areaPins: {
  x: number;
  y: number;
  lat: number;
  lng: number;
  label: string;
  anchor?: "start" | "end";
}[] = [
  { x: 150, y: 150, lat: 44.9778, lng: -93.265, label: "Minneapolis" },
];

/** Center + radius for the working-radius circle — roughly the shop address. */
export const serviceRadius = {
  center: { lat: 44.964, lng: -93.193 },
  miles: 18,
};
