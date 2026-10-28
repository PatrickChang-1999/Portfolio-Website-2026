# Ting-Yu Chang — Portfolio

Personal portfolio for Ting-Yu (Patrick) Chang, business and data analyst. The 0205 design combines warm ivory, subtle grain, wave graphics, and recessed title styling.

## Website files

This is a static HTML, CSS, and JavaScript site. There is no package installation or build step. Publish the contents of `dist/` as the website root.

| Page | File |
| --- | --- |
| Home | `dist/index.html` |
| Work | `dist/work.html` |
| Experience | `dist/experience.html` |
| Capabilities | `dist/capabilities.html` |
| About | `dist/about.html` |
| Pro-Racing case study | `dist/reporting.html` |
| Avanath case study | `dist/occupancy-preview.html` |

`dist/occupancy.html` preserves an older URL with a redirect. Main navigation contains five pages; the two case studies are opened from the portfolio.

## Run locally

With Python 3 installed, run this command from the repository root:

```sh
python -m http.server 8000 --directory dist
```

Then open `http://localhost:8000/`.

## Update your headshot

Upload an actual JPEG named `headshot.jpg` to:

`dist/assets/profile/headshot.jpg`

The existing folder contains a short README. A 4:5 crop around 800 × 1000 pixels or larger works well. Commit the image and deploy the updated site. The About page will load it automatically; no HTML edits are required. A missing or invalid image leaves the TYC placeholder visible.

## Update your résumé

Replace `dist/resume.docx` with the final document, keeping its filename. The existing navigation and download links will continue to work. The currently imported document is the existing draft and should be replaced before the public website launch. To switch to PDF, update every résumé link together.

## Hosting

Creating this repository stores the source; it does not enable website hosting. The project can be hosted by any static host using `dist/` as the publish directory. For GitHub Pages, use a GitHub Actions workflow that uploads `dist/`; the Pages workflow and hosting settings are the next setup step. A project-site subpath is supported by the relative asset and page URLs.

The existing ChatGPT-hosted Site remains a separate deployment. GitHub commits do not automatically update that Site.

## Maintenance

- Preserve the current layout and 0205 styling unless a redesign is explicitly requested.
- Keep shared navigation, footer links, terminology, and tool icons consistent across pages.
- Underlined links that use a bottom border must not gain a second text underline on hover or keyboard focus.
- Keep the synthetic-data disclosure and the distinction between test R² and recursive four-week WAPE in the Pro-Racing case study.
- When changing a stylesheet or script, update its query-string version in affected HTML files.
- Verify desktop and mobile layouts, internal links, the résumé download, and the headshot fallback after relevant edits.

Additional design and content notes are in `docs/`; asset provenance is in `ASSET_SOURCES.md`. The original analytics source workbooks, Power BI project, and client presentation are not part of this website repository.
