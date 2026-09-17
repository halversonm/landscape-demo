/**
 * Selected work. `slug` selects the plan thumbnail in ProjectPlan.astro.
 * `photo` is a stock photo (Unsplash) standing in for a real jobsite photo —
 * swap for an actual project photo when this stops being a demo.
 */
export interface Project {
  slug: "kenwood" | "marine" | "linden-hills" | "summit";
  location: string;
  title: string;
  note: string;
  tags: string[];
  photo: string;
  photoAlt: string;
}

export const projects: Project[] = [
  {
    slug: "kenwood",
    location: "Kenwood, Minneapolis",
    title: "Walled courtyard garden",
    note:
      "A 1920s lot with no usable yard. We took it down to grade, built a limestone wall for privacy, and centered a bluestone terrace between four mirrored beds.",
    tags: ["Design", "Masonry", "Planting", "Lighting"],
    photo: "https://images.unsplash.com/photo-1700689807667-82630348b301?q=80&w=900&h=675&auto=format&fit=crop&crop=entropy",
    photoAlt: "A curved brick path bordered by a low stone wall, clipped hedges, and flowering beds.",
  },
  {
    slug: "marine",
    location: "Marine on St. Croix",
    title: "Bluff-side terrace steps",
    note:
      "Four dry-laid stone terraces turn an unwalkable 22% slope into garden rooms, with a switchback path that meets ADA rise on every run.",
    tags: ["Grading", "Masonry", "Native planting"],
    photo: "https://images.unsplash.com/photo-1644745122221-680d2eeb387f?q=80&w=900&h=675&auto=format&fit=crop&crop=entropy",
    photoAlt: "Stone steps terracing up a planted hillside.",
  },
  {
    slug: "linden-hills",
    location: "Linden Hills, Minneapolis",
    title: "Front-yard rain garden",
    note:
      "Both downspouts and the driveway now drain into a planted basin sized for a 1-inch storm. Nothing reaches the street, and the city rebate covered the plants.",
    tags: ["Drainage", "Design", "Planting"],
    photo: "https://images.unsplash.com/photo-1690404946138-f12ca2497d36?q=80&w=900&h=675&auto=format&fit=crop&crop=entropy",
    photoAlt: "A dense planted garden bed mixing flowers and stone.",
  },
  {
    slug: "summit",
    location: "Summit Avenue, St. Paul",
    title: "Historic entry restoration",
    note:
      "We reset the original 1901 sandstone walk and steps to true grade, matched the missing pieces from a regional quarry, and replaced two failing boulevard lindens.",
    tags: ["Restoration", "Masonry", "Arborist"],
    photo: "https://images.unsplash.com/photo-1723544541550-7926c4e64aa9?q=80&w=900&h=675&auto=format&fit=crop&crop=entropy",
    photoAlt: "A stone house with a mature garden along its entry.",
  },
];
