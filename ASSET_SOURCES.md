# Tool assets

- Excel: Microsoft, via https://commons.wikimedia.org/wiki/File:Microsoft_Office_Excel_(2025–present).svg (PD-textlogo).
- KNIME: KNIME.com AG, via https://commons.wikimedia.org/wiki/File:KNIMELogoTM.svg (public-domain dedication listed by uploader).
- Power BI: extracted from the user-provided Avanath presentation, slide 4.
- SQL: original generic database symbol, not a vendor logo.

- Pro-Racing logo: transparent PNG derived from the user-provided `Pro Racing X -logo.jpg`, used consistently across the site.
- Homepage Avanath logo: reused existing presentation-derived asset.


## Pro-Racing completed demonstration — 21 October 2026

- `dist/assets/pro-racing/executive-overview.png`: accepted final image `image(20261021-110141).png`, copied unchanged from user-provided project evidence.
- `online-testing.png`, `online-validation.png`, `wholesale-testing.png`: user-supplied KNIME plots, copied unchanged.
- Four-week forecast values: `combined_4week_forecast_V3_FINAL.csv`, 8 records, origin 156, no-promotion scenario.
- Recursive WAPE: `backtest_WAPE_origin130_V3_FINAL.csv`, 2 records, origin 130. Ratios checked from supplied numerator and denominator; wholesale is the raw treatment described in the handoff.
- Method description: complete `Pro_Racing_Portfolio_Handoff_2026-10-21.md`. No model rerun or dashboard redesign.
- The workflow diagrams were subsequently integrated; see the KNIME evidence notes below. The two one-step test R² values now have supporting Numeric Scorer screenshots supplied on 26 October 2026.
- PBIX received as supporting evidence; not executed or placed in public site assets. Company data, source workbooks, and internal queries are not included.
- The synthetic demonstration is distinct from résumé-reported professional outcomes.


## KNIME evidence draft — 21 October 2026
- `knime-workflow.svg` is the original vector export embedded in the uploaded `Sales forcasting.knwf`. Three detail SVGs change only viewport dimensions; node graphics and connections are untouched.
- Workflow inspected as an archive, not executed. Final model settings and test filters (`week_index > 143`) inspected. Testing outputs feed Numeric Scorer #62 (online) and #113 (wholesale).
- No cached scorer tables or fitted-model objects are present, despite settings recording executed status. Included benchmark CSVs are V2, not final V3 evidence.
- The earlier pending evidence for test R² values 0.947 and 0.997 was resolved on 26 October 2026 with the supplied Numeric Scorer screenshots. The displayed values were checked; the workflow was not independently re-executed.
- Original KNIME archive remains outside website assets; only inspected diagram exports are included.

## Numeric Scorer evidence — 26 October 2026

- `dist/assets/pro-racing/online-test-scorer.png`: unchanged copy of `image(20261026-214424).png`; selected Numeric Scorer on the final Calendar + Lag testing branch displays R² = 0.947. Online-retail workflow context is visible.
- `dist/assets/pro-racing/wholesale-test-scorer.png`: unchanged copy of `image(20261026-214440).png`; corresponding wholesale testing branch displays R² = 0.997. Branch layout matches the existing wholesale workflow evidence.
- The screenshots are retained as source evidence. Direct “View scorer output” links were removed from the case-study metric notes at the user’s request on 27 October 2026. Values are retained at the three decimal places shown. This verifies the displayed scorer values, not an independent model rerun. Synthetic data, one-step test evaluation, and recursive four-week WAPE remain explicitly distinguished.
