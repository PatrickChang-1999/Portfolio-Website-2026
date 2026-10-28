# 0205 design language

Approved direction: option 02 corner waves combined with option 05's ivory grain and business-card finish.

Applied to the five primary routes: Home, Work, Experience, Capabilities, About. The shared implementation is `dist/design-0205.css`, scoped by the `design-0205` body class. Growth was removed to avoid repeating Experience. About retains the biography and presents the two confirmed degrees as a chronological education timeline. Case-study routes keep their existing reporting presentation.

## Visual rules

- Warm ivory surfaces on a matte cream background; charcoal typography and muted taupe borders.
- Fine repeating paper grain drawn as a small local SVG, with broad tone-on-tone corner waves.
- The homepage title card carries the full framed, debossed stationery treatment. Secondary page titles share its border, waves, and typography.
- Existing project, workflow, company, education timeline, and evidence surfaces use quieter versions. The capabilities table retains its table structure on desktop and stacked rows on mobile.
- Keep body copy flat and readable. Decorative layers never intercept input. Keep existing reduced-motion support and visible keyboard focus.
- Use full-surface corner artwork rather than a partial-height tile that can leave a visible edge.

Both decorative SVGs live in `dist/assets/0205/`. All text stays real selectable HTML; the approved mockup is a reference, not a rasterized page.
