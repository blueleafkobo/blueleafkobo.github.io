# MadeGood Launch Website Handoff

Use this handoff to update the Blue Leaf Kobo website for MadeGood’s App Store launch. Keep this work separate from the app repo and from unrelated website edits, because the website can be pushed on a different schedule from the app review submission.

## Repository

- Website repo: `/Users/gregorerdmann/Developer/BlueLeafKoboSite`
- App repo source of truth: `/Users/gregorerdmann/Developer/BeforeAfter`
- App launch document: `/Users/gregorerdmann/Developer/BeforeAfter/APP_STORE_LAUNCH_CHECKLIST.md`
- App name: `MadeGood`
- Bundle ID: `com.blueleafkobo.madegood`
- Launch model: free iPhone app with one-time MadeGood Pro unlock
- Free tier: full core workflow plus 10 completed exports/shares
- Pro unlock: unlimited sharing/export
- Product ID: `com.blueleafkobo.madegood.pro`
- Pro price: do not hard-code on the public website unless intentionally showing storefront-specific pricing; prefer “one-time unlock” and let App Store show the local price

## Branch And Commit Strategy

- Create a separate website branch, for example `codex/madegood-launch-site`.
- Do not mix these changes into the app release commit.
- Do not push until the user explicitly asks.
- Website repo currently has unrelated local changes. Preserve them.
- Stage only MadeGood launch website files when committing.
- Recommended commit scope: MadeGood product, support, privacy, app directory, sitemap if needed, and any MadeGood-specific styles/assets.
- Avoid staging unrelated Touch-Up Mixer, site icon, or global support changes unless they are intentionally part of this website release.

## Current Website Issues

- `/apps/index.html` says MadeGood is `In development`.
- `/madegood/index.html` does not clearly explain the free-to-start model or MadeGood Pro.
- `/madegood/index.html` uses developer-ish sharing language in places, such as “iOS share sheet”; customer-facing copy should say “Messages, Mail, AirDrop, or the apps you already use”.
- `/support/madegood/index.html` does not yet explain the 10 free exports, MadeGood Pro, Restore Purchase, or purchase troubleshooting.
- `/privacy/madegood/index.html` does not yet mention App Store in-app purchases / restore purchase status handled by Apple.
- The site should be written for after launch, not prelaunch.

## Files To Review And Update

- `/Users/gregorerdmann/Developer/BlueLeafKoboSite/index.html`
- `/Users/gregorerdmann/Developer/BlueLeafKoboSite/apps/index.html`
- `/Users/gregorerdmann/Developer/BlueLeafKoboSite/madegood/index.html`
- `/Users/gregorerdmann/Developer/BlueLeafKoboSite/support/madegood/index.html`
- `/Users/gregorerdmann/Developer/BlueLeafKoboSite/privacy/madegood/index.html`
- `/Users/gregorerdmann/Developer/BlueLeafKoboSite/sitemap.xml`
- `/Users/gregorerdmann/Developer/BlueLeafKoboSite/styles.css` only if layout needs a MadeGood-specific pricing/free-Pro section

## Positioning To Use

MadeGood helps repairers, tradies, cleaners, renovators, and small service businesses capture clear before and after job photos on iPhone.

Free to start:

- create jobs
- capture or import before and after photos
- use the ghost overlay to match after shots
- organise larger jobs with optional Job Areas
- share/export 10 completed results

MadeGood Pro:

- one-time unlock
- unlimited sharing/export
- no subscription wording
- do not promise future features as part of the paid unlock

Privacy/trust:

- no account
- no cloud sync
- no tracking
- no analytics
- jobs and photos stay on the iPhone unless the user chooses to share/export

Avoid:

- `proof`
- `evidence`
- `claim`
- `insurance`
- `audit`
- `standard iOS share sheet` in customer-facing copy

## Suggested Website Copy

### Product Page Hero

Headline:

```text
Before and after job photos, kept together.
```

Lead:

```text
MadeGood helps you capture matching before and after photos, keep job details organised, and send clear results from your iPhone.
```

CTA:

```text
Download on the App Store
```

Secondary CTA:

```text
Read support
```

If the App Store URL is not live yet, keep the primary CTA as:

```text
App Store link coming soon
```

and switch it to the real App Store link after approval/go-live.

### Free And Pro Section

Heading:

```text
Free to start. Pro when you need more sharing.
```

Body:

```text
MadeGood is free to start with the full job-photo workflow and 10 completed exports included. When you are using it regularly, MadeGood Pro is a one-time unlock for unlimited sharing and export.
```

Free card:

```text
Free includes jobs, before and after photo capture, ghost-overlay matching, optional Job Areas, local storage, and 10 completed exports.
```

Pro card:

```text
MadeGood Pro unlocks unlimited sharing and export for single photos, before/after pairs, selected areas, and whole jobs. It is a one-time App Store purchase, not a subscription.
```

### Sharing Language

Use:

```text
Send results through Messages, Mail, AirDrop, or the apps you already use on iPhone.
```

Avoid:

```text
iOS share sheet
```

except in privacy/support technical explanations if absolutely needed.

### FAQ Additions

```text
Is MadeGood free?
```

```text
MadeGood is free to start. You can use the full job-photo workflow and complete 10 exports before upgrading.
```

```text
What does MadeGood Pro unlock?
```

```text
MadeGood Pro unlocks unlimited sharing and export. It is a one-time App Store purchase, not a subscription.
```

```text
Does MadeGood store my photos online?
```

```text
No. Jobs and photos are stored locally on your iPhone. MadeGood does not use accounts, cloud sync, analytics, advertising, or tracking.
```

## Support Page Updates

Add sections for:

- Free exports and MadeGood Pro
- Restore Purchase
- Export/share troubleshooting
- What counts as an export

Suggested copy:

```text
MadeGood is free to start with 10 completed exports. After those exports are used, MadeGood Pro unlocks unlimited sharing and export.
```

```text
If you already purchased MadeGood Pro, open Settings in MadeGood and choose Restore Purchase. Purchases are handled by Apple through the App Store.
```

```text
An export is counted when a share/export action is completed. Creating jobs, adding photos, organising Job Areas, and viewing existing work do not require Pro.
```

## Privacy Page Updates

Add an In-App Purchases section:

```text
MadeGood Pro is a one-time App Store unlock. Purchases and restore-purchase checks are handled by Apple through the App Store. MadeGood uses the purchase result to unlock unlimited sharing/export, but Blue Leaf Kobo does not receive your payment details.
```

Update sharing language:

```text
When you choose to share or export a job, area, or photo pair, the generated files may contain photos, labels, notes, client details, addresses, or other information you entered. The files leave MadeGood only when you choose a destination such as Messages, Mail, AirDrop, Files, or another app on your iPhone. The selected destination handles the shared content under its own privacy policy.
```

## App Directory Updates

In `/apps/index.html`:

- Change MadeGood status from `In development` to `Available now` only after launch approval/go-live.
- If preparing before approval, use `Launching soon` rather than `In development`.
- Add an App Store download link only once the public URL is known.
- Keep Learn more and Support links.

Suggested post-launch MadeGood listing:

```text
Available now
MadeGood
Capture before and after job photos, keep work organised, and share clear results from iPhone. Free to start, with MadeGood Pro for unlimited sharing/export.
```

## App Store URL Handling

- Do not invent the App Store URL.
- If the App Store URL is unknown, leave a clear placeholder in the handoff or HTML comment.
- After approval/live release, use the real App Store URL from App Store Connect.
- Make the website push independent from the app binary push. It is safe to prepare the site branch before review, but only merge/publish “Available now” and download links when timing is correct.

## Verification

- Open the site locally in a browser or static preview.
- Check desktop and mobile widths.
- Confirm MadeGood no longer reads like a development placeholder.
- Confirm freemium is clear but not pushy.
- Confirm no public page hard-codes a storefront-specific Pro price.
- Confirm support and privacy pages mention in-app purchase/restore behavior accurately.
- Confirm all links resolve:
- `/madegood/`
- `/support/madegood/`
- `/privacy/madegood/`
- App Store link if added
- Confirm sitemap includes MadeGood pages if it does not already.

## Suggested Commit

```text
Update MadeGood website for App Store launch
```

Commit only the MadeGood website launch files. Keep app repo changes and unrelated website edits out of this commit unless the user explicitly asks to combine them.
