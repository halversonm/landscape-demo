/** Selected work. `slug` selects the plan thumbnail in ProjectPlan.astro. */
export interface Project {
  slug: "kenwood" | "marine" | "linden-hills" | "summit";
  location: string;
  title: string;
  note: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "kenwood",
    location: "Kenwood, Minneapolis",
    title: "Walled courtyard garden",
    note:
      "A 1920s lot with no usable yard. We took it down to grade, built a limestone wall for privacy, and centered a bluestone terrace between four mirrored beds.",
    tags: ["Design", "Masonry", "Planting", "Lighting"],
  },
  {
    slug: "marine",
    location: "Marine on St. Croix",
    title: "Bluff-side terrace steps",
    note:
      "Four dry-laid stone terraces turn an unwalkable 22% slope into garden rooms, with a switchback path that meets ADA rise on every run.",
    tags: ["Grading", "Masonry", "Native planting"],
  },
  {
    slug: "linden-hills",
    location: "Linden Hills, Minneapolis",
    title: "Front-yard rain garden",
    note:
      "Both downspouts and the driveway now drain into a planted basin sized for a 1-inch storm. Nothing reaches the street, and the city rebate covered the plants.",
    tags: ["Drainage", "Design", "Planting"],
  },
  {
    slug: "summit",
    location: "Summit Avenue, St. Paul",
    title: "Historic entry restoration",
    note:
      "We reset the original 1901 sandstone walk and steps to true grade, matched the missing pieces from a regional quarry, and replaced two failing boulevard lindens.",
    tags: ["Restoration", "Masonry", "Arborist"],
  },
];
