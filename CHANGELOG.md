# Changelog

All notable changes to this project will be documented in this file.

## [2.2.0] - 2026-10-21
### Added
- `images/og-cover.jpg` — a 1200x630 Open Graph cover generated from the revenue cockpit by `scripts/make_og_cover.py`, used as `og:image` / `twitter:image` so LinkedIn and X previews render the showcase instead of a stale dashboard shot
- `scripts/check_site.py` — portfolio integrity check (asset references resolve, canonical/og:url/JSON-LD host agreement, og:image presence and dimensions, no private files tracked, 5 case studies published)
- `Site integrity check` CI workflow running that check on every push and pull request
- `url` property in the JSON-LD Person schema
- Cache rule for `.jpg` assets in `netlify.toml`

### Fixed
- **Canonical URL pointed at the wrong site.** `canonical`, `og:url` and `og:image` referenced `ansh-thakur.netlify.app`, an older Vite/React build, while the published static site is `ansh-thakur-netlify.netlify.app`. Search engines would have treated the empty SPA as canonical, and the `og:image` URL returned **404**, so link previews had no image.
- `meta description` listed only two of the five case studies; it now covers all five and the 179,010-record total, matching the Open Graph description

### Changed
- Replaced the `Jekyll site CI` workflow with the real site integrity check. This is a plain static site with no `_config.yml` or `Gemfile`, so the Jekyll build was copying files into an unused `_site/` directory and validating nothing that actually ships.

## [2.1.0] - 2026-10-20
### Added
- Business Questions table expanded from 8 to 14 with findings from three new reproducible analyses
- New supply-chain questions: revenue-stall root cause, discount/delivery counterfactual, customer concentration (HHI), sales-team margin leak
- New Uber questions: genuine peak-hour price premium with airport-trip control, driver concentration non-risk
- New churn questions: price non-monotonicity, paperless-billing triple-control confounder test
- Key Achievements updated in all three project sections

### Changed
- Supply chain section: corrected stale currency and percentage figures to match the committed pipeline output (₹3.63 cr exposure, ₹7.30 cr / ₹2.12 cr, 80.6% A-items)
- Churn section: corrected three under-tested claims with stronger controlled evidence
- "Don't act" count updated from 6-of-8 to 8-of-14

## [2.0.0] - 2026-10-02
### Changed
- Updated all dashboard preview images to modern executive purple theme
- Supply chain dashboard: new card-based UI with filter panel
- Churn dashboard: redesigned with executive insights and KPI cards

## [1.2.0] - 2026-09-02
### Changed
- Updated ATS-optimized resume (PDF + DOCX)

## [1.1.0] - 2026-08-18
### Added
- 3rd project (Subscription Retention Analytics) with dashboard preview
- Real dashboard preview images for all projects
- Verified certification links
- Corrected Netlify domain

## [1.0.0] - 2026-08-14
### Added
- Initial portfolio website with 2 featured projects
- Interactive HTML/CSS/JS portfolio site
- Netlify deployment
