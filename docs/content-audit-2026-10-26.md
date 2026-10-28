# Portfolio content audit — 26 October 2026

Scope: five main pages (Home, Work, Experience, Capabilities, About), both case studies, and the legacy occupancy redirect. Existing 0205 design retained. Site access remains owner-private; this update is not a public launch.

## Corrections

- Removed remaining periods in the About and Experience browser-tab titles. Removed periods from the About page's short noun headings.
- Matched the Pro-Racing project name across Home, Work, and its case study: “Executive reporting and sales forecasting.”
- Standardized synthetic-data terminology and matched the Avanath summary across Home and Experience. Kept the independent demonstration distinct from professional outcomes.
- Matched month/date ranges on Work and the case studies to Experience. Education remains newest first, June 2025 then June 2023, with both cum laude honors retained per the user's confirmation.
- Matched repeated company naming, tool descriptions, case-study calls to action, directional arrows, and the About/Experience closing statement.
- Added forecasting as evidence for the Applied analytics capability, alongside occupancy analysis, to cover its listed KNIME tool.
- Made the Avanath model comparison qualifier explicit in Experience: original models without logit transformation.
- Clarified that the dashboard's zero is wholesale ordered units month to date, rather than a count of orders.
- Removed visible Avanath “preview” labels and stale case-study noindex/nofollow tags. The existing occupancy-preview.html URL is retained to avoid breaking links. Hosting access remains private.
- Made image-viewer accessible labels consistent and specific. Case-study Work navigation is marked as the current location, rather than claiming Work is the current page.
- Standardized the shared stylesheet version. At viewport widths of 360px and below only, Work card headings use 35px and case-study headings use 44px to prevent long-word overflow. Desktop styles and assets are unchanged.

## Evidence checked

- Final forecast CSV: eight rows, origin week 156, weeks 157–160, dates 12 Oct–02 Nov 2026. All eight displayed rounded values agree; next week totals 4,722 units.
- Final WAPE CSV: original four-step forecast errors from origin 130. Online retail 1.69%; wholesale 4.81%; numerators and actual totals agree with the tables.
- Dashboard screenshot: 11 Oct 2026 snapshot, inventory 60,901 units, zero wholesale ordered units MTD, next week 4,722 units.
- Avanath presentation: printed slide 4 supports 7,000+ records, six sources, four models and tool names; printed slide 7 supports 2016–2024 monthly coverage; slide 23 supports property R² values 0.94 and 0.43; slide 26 supports the four recommendations and proposed alert threshold; appendix slide 38 supports all four R²/RMSE pairs. RMSE is expressed on the website in percentage points. These are team-reported results, not an independent rerun or future-accuracy guarantee.
- Current download is byte-for-byte identical to the uploaded GPT-purpose résumé. Role and education dates agree with the site. The user explicitly confirmed cum laude for both degrees; the older résumé lists only the undergraduate honor.

## Validation

- Eight HTML files; 207 local href/src references resolve. Anchor fragments, unique IDs and ARIA references validated.
- All seven content pages have one H1, consistent navigation and footer, and the same LinkedIn and résumé destinations. Tool images use PNGs; all 63 images have alt attributes (decorative icons intentionally use empty alt).
- JavaScript syntax checks and git whitespace checks passed.
- Browser: all seven pages checked at desktop width (1348px content viewport), and in 320px, 390px and 768px frames. No document horizontal overflow. Narrow heading overflow was found in Work and Avanath and fixed; targeted rechecks passed.
- All seven menus open and close via Escape. All 12 evidence viewers open/close, preserve background height and restore trigger focus, including images inside expanded details.
- Console output observed only browser-extension metadata errors, not site script errors.
- Résumé is a valid DOCX and all download links resolve to it. The browser download-event check timed out, so a completed browser download is not claimed. External LinkedIn profile availability was not revalidated; destination consistency was checked.

## Before public launch

1. Replace dist/resume.docx with the final résumé (or explicitly migrate all links to a final PDF). Current file contains placeholder contact details, a student-era summary, a displayed LinkedIn address that differs from its actual hyperlink, “97% accuracy” wording, and other older unsubstantiated outcome claims. Do not invent contact details or publish this as a final résumé.
2. **Resolved on 26 October 2026:** supplied Numeric Scorer screenshots show online retail test R² = 0.947 and wholesale test R² = 0.997. Both original screenshots are retained as evidence, and the site no longer says the evidence is missing. Verification covers the displayed outputs; no independent model rerun was performed. The separate four-week WAPE evidence remains unchanged.
3. Verify the final résumé download and LinkedIn profile in the launch environment. GitHub/hosting migration and public access changes are separate from this private-site cleanup.

## Follow-up verification

Both scorer screenshots were visually inspected and copied unchanged. Source and deployed asset hashes matched. The corresponding metric notes initially linked to the evidence; those links were removed at the user’s request on 27 October 2026. The verified metric values remain unchanged.


## Link styling follow-up — 27 October 2026

- Removed both “View scorer output” links from the Pro-Racing case study; retained the metric notes, synthetic-data qualifier, and verified R² values.
- Prevented the shared hover rule from adding a text underline to links that already draw a bottom-border underline. Existing layout, colors, button designs, and single-underline styling remain intact.
- Audited all 144 clickable controls across seven content pages at desktop and 390px widths. A temporary browser harness exercised CSS-equivalent default, hover, keyboard-focus, active, and combined hover/focus states: 1,440 checks with no duplicate underline failures. Work’s case-study link was also checked with actual keyboard focus; it retained a single 1px border and visible focus outline.
- Incremented the shared stylesheet URL to v15 across all content pages. The temporary audit harness was removed before packaging.
