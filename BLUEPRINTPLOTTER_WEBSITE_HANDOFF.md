# BlueprintPlotter website pages

Prepared 6 September 2026. Local changes only; not committed, pushed or published.

## Routes

- Landing: /blueprint-plotter/
- Support: /support/blueprint-plotter/
- Privacy: /privacy/blueprint-plotter/
- Guide: /guides/blueprint-plotter/

The homepage, app directory, support hub, sitemap and llms.txt link to the new pages. BlueprintPlotter-specific styling is isolated in blueprint-plotter.css. The icon is copied from the app's existing 512px AppIcon asset.

## Content decisions

- Coming soon; no invented price, store ID, release date or final hardware requirements.
- Guide based on docs/USER_MANUAL.md and current settings in the app repository.
- Creative documentation, not certified manufacturing drawings.
- Pen export and Preview Style backgrounds distinguished explicitly.
- No tracking scripts added to these four pages. Existing unrelated site analytics unchanged.
- Privacy distinguishes local app processing from support email, cloud destinations and website hosting/analytics elsewhere on the site.
- Uses the site's existing published support address.

## Before publication / release

- Owner to review privacy wording, support handling and developer identity; this is factual product copy, not a legal certification.
- Add final product screenshots once the release UI is settled, using models cleared for public display.
- Confirm pricing, minimum OS and App Store URL before replacing coming-soon copy.
- Publish only on explicit instruction. Pushing main deploys GitHub Pages.
- Once published, verify all four HTTPS URLs and put support/privacy/marketing URLs into App Store Connect. Add the privacy URL inside the app separately.

## Verification

- 7 affected HTML pages: 123 local link/asset targets passed, including guide anchors; no duplicate IDs and one h1 per page.
- Sitemap parses with xmllint; git diff --check passed.
- Four new pages loaded at 1440px and 390px: no horizontal overflow or missing images.
- Desktop landing and mobile guide screenshots visually reviewed.
- DeepSeek FAQ draft delivered successfully; final review corrected its unsupported assertion about Preview Style backgrounds.

Existing changes to MadeGood's support link in apps/index.html and guides/touch-up-mixer/index.html were preserved, along with unrelated untracked files. No app source or signing settings changed.
