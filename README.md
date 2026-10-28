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

Upload your final PDF into `dist/` using the exact filename `Ting-Yu Chang Resume for github.pdf`. Full repository path: `dist/Ting-Yu Chang Resume for github.pdf`. Keep the spaces and capitalization as shown. All 15 résumé links already target this PDF and suggest the same download filename. Commit the upload and deploy the updated site. The PDF is now present and was verified to open correctly. The older `dist/resume.docx` is a legacy draft and is no longer linked by the website.

## Hosting

The GitHub Pages workflow is `.github/workflows/deploy-pages.yml`. It uploads only `dist/` and deploys after a change to `dist/` is pushed to `main`. There is no build step. Relative asset and page URLs support the project-site subpath.

One-time setup:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, select `main`, and run it. If an earlier run failed while Pages was disabled, rerun it after selecting the source.
4. Open the URL shown by the successful deployment and check the résumé download over HTTPS.

The workflow cannot enable the repository's Pages setting by itself. The project can also be hosted by another static host using `dist/` as the publish directory.

The existing ChatGPT-hosted Site remains a separate deployment. GitHub commits do not automatically update that Site.

## Maintenance

- Preserve the current layout and 0205 styling unless a redesign is explicitly requested.
- Keep shared navigation, footer links, terminology, and tool icons consistent across pages.
- Underlined links that use a bottom border must not gain a second text underline on hover or keyboard focus.
- Keep the synthetic-data disclosure and the distinction between test R² and recursive four-week WAPE in the Pro-Racing case study.
- When changing a stylesheet or script, update its query-string version in affected HTML files.
- Verify desktop and mobile layouts, internal links, the résumé download, and the headshot fallback after relevant edits.

Additional design and content notes are in `docs/`; asset provenance is in `ASSET_SOURCES.md`. The original analytics source workbooks, Power BI project, and client presentation are not part of this website repository.
