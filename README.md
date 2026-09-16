# Cedar & Stone Landscape Co. — demo site

A dummy marketing site for a **fictional** Twin Cities landscape design/build
company. Built as a portfolio demo: the whole site borrows the visual language
of a landscape architect's plan set — drafting-paper ground, contour lines,
plan-view tree symbols, sheet numbers (`L-100` … `L-600`), a north arrow.

Nothing here is real — the company, the projects, the testimonials, the license
number, and the contact details are all invented.

## Stack

- [Astro](https://astro.build) (static, no UI framework)
- Plain CSS with custom-property tokens in `src/styles/global.css`
- Google Fonts: Zilla Slab (display) + Hanken Grotesk (body)
- One small vanilla `<script>` in `Layout.astro` for the theme toggle, scroll
  reveals, and the animated hero drawing

## Commands

| Command           | Action                        |
| :---------------- | :---------------------------- |
| `npm install`     | Install dependencies          |
| `npm run dev`     | Dev server at `localhost:4321` |
| `npm run build`   | Build to `./dist/`            |
| `npm run preview` | Preview the production build  |

Per repo convention, run the dev server in the background:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, `astro dev logs`.

## Where things live

```
src/
├── layouts/Layout.astro     # <head>, fonts, theme script, page shell + client JS
├── pages/index.astro        # the one page — assembles every section
├── components/
│   ├── Header.astro          # sticky nav + theme toggle
│   ├── SitePlan.astro        # animated hero site-plan drawing
│   ├── ServiceIcon.astro     # plan-symbol icons for the services list
│   ├── ProjectCard.astro     # one selected-work card
│   ├── ProjectPlan.astro     # per-project plan thumbnail (by slug)
│   ├── ServiceAreaMap.astro  # stylized metro map
│   ├── ContactForm.astro     # demo enquiry form (submits to nothing)
│   ├── Footer.astro
│   └── SvgDefs.astro         # shared SVG <defs> (grid + hatch patterns)
├── data/                     # all copy: site, services, process, projects,
│                             #   testimonials, serviceArea
└── styles/global.css         # tokens + every component rule
```

## Editing content

Everything readable is in `src/data/*.ts`. To add a project you also add a
matching plan-thumbnail branch in `src/components/ProjectPlan.astro`, keyed by
the project's `slug`.

## Making it a real site

- Point the `<form>` in `ContactForm.astro` at a real handler (Formspree, a
  serverless function, etc.) and remove the submit interception in `Layout.astro`.
- Replace the placeholder phone / email / address / license in `src/data/site.ts`.
- Swap the plan drawings for photographs if you'd rather — the layout doesn't
  care what's inside `.thumb` / `.plan-figure`.
