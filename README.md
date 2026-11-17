# Refuge Oregon City Next

Chapter website review draft for Refuge LARP Oregon City and its City of the Fallen campaign. Shares the static Refuge Next design and approved Refuge photography. This is not the live chapter site or the character database.

## Preview

Run `python3 -m http.server 8794 --bind 127.0.0.1`, then open http://127.0.0.1:8794/.

No build step, backend, accounts, trackers or external fonts. Links work without JavaScript; theme changes, photo enlargement and motion require JavaScript.

## Content sources

- Official chapter and event listings: https://db.refugelarp.org/chapters/5 and events 730, 731, 732, 733. Checked November 17, 2026. Dates, prices and registration status may change.
- Public campaign culture/species folder: https://drive.google.com/drive/folders/10LKm-hcE-85Ny6UmA1dSiiNy7CSZMfN2. Documents are linked, not copied.
- Chapter introduction, role contact emails and player policy resources were checked in the chapter's announcements and policy forum. The site contains curated public-facing facts, not chat transcripts or member identities.
- Seattle/Oregon City participation incentive was confirmed current by the Refuge Technology Committee Chairperson. Full eligibility remains with chapter Logistics.
- Photographs were reused with the Chairperson's approval. They show Refuge participants and are not represented as Oregon City event photography. No blanket third-party photo license is granted.

Do not promise unverified 2027 meals, lodging, NPC pricing, dues, refunds, physical accessibility or waived participation requirements. Refer players to the current event instructions and official role contacts. Chapter policies may require Discord sign-in.

## Deployment and review

Separate preview only. No custom domain, redirects or changes to existing chapter/national/database sites. Before production: chapter staff review copy and contacts; verify current policy and event details; test contrast, keyboard, screen-reader usability and supported browsers. No private lore, ban lists, health information, member details or sleeping rosters belong in this repository.

## Shared theme

Presentation assets come from https://github.com/refuge-larp/refuge-theme. `theme.json` follows the latest release; hourly and content-push builds test before deployment. Set a version tag to pin or roll back. Checked-in CSS/JS are a local-preview fallback; deployed builds replace them with the selected release and record it in `theme-version.json`. Theme/tooling updates do not change this site’s content automatically.
