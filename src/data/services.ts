/** Scope-of-work items. `icon` maps to a symbol in ServiceIcon.astro. */
export interface Service {
  icon: "design" | "masonry" | "planting" | "drainage" | "lighting" | "maintenance";
  name: string;
  blurb: string;
}

export const services: Service[] = [
  {
    icon: "design",
    name: "Landscape design",
    blurb:
      "Site analysis, grading and drainage plans, planting plans, and a full construction set your permit office will accept.",
  },
  {
    icon: "masonry",
    name: "Hardscape & masonry",
    blurb:
      "Natural stone walls, bluestone patios, steps, and driveways set on properly compacted base — dry-laid or mortared.",
  },
  {
    icon: "planting",
    name: "Planting & softscape",
    blurb:
      "Native-forward planting with hardy perennials, shade trees, and lawn alternatives sized for how the bed will look in year five.",
  },
  {
    icon: "drainage",
    name: "Grading & drainage",
    blurb:
      "Regrading, French drains, dry wells, and rain gardens that move water off the foundation and keep it on your property.",
  },
  {
    icon: "lighting",
    name: "Lighting & irrigation",
    blurb:
      "Low-voltage path and accent lighting plus zoned drip irrigation, wired and plumbed during the build, not retrofitted after.",
  },
  {
    icon: "maintenance",
    name: "Seasonal maintenance",
    blurb:
      "Spring and fall cleanups, pruning, bed edging, and a two-year grow-in program for every landscape we install.",
  },
];
