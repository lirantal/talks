# Agent guidance

## Purpose and scope

This repository contains Liran Tal’s public presentation and workshop materials. Read [README.md](README.md) before making changes, plus any instructions and build configuration inside the affected talk or workshop.

The speaking website is at https://lirantal.com/speaking. The engagement archive is https://github.com/lirantal/public-speaking. Link to those sources when relevant; avoid duplicating their full event history here.

## Structure and naming

- Put presentations under `slides/<talk-slug>/` and workshops under `workshops/<workshop-slug>/`.
- Use stable lowercase, hyphen-separated slugs. Put dates and events in `editions/YYYY-MM-DD-event-slug/`, not in the main talk folder name.
- Start with a README and the available materials. Add `src/`, `assets/`, `demos/`, and other folders only as needed. Use `src/` for presentation sources to avoid `slides/<talk>/slides/` repetition.
- Keep resources beside the talk that uses them. Put assets or themes used by several talks in `shared/`.
- Whenever adding a talk, workshop, or other materials, update the relevant directory's `README.md` listing. Include the title and relative links to materials that are actually available, and update existing entries when materials are added, removed, or changed. Do not describe a deck as published unless it is live on the published site.

## Content and preservation

- Preserve the author’s titles, voice, technical meaning, and original editable files. Do not rewrite or convert an entire deck unless requested.
- Keep delivered edition snapshots intact. Make revisions in current sources or add a new edition. Correct an archived edition only when explicitly requested.
- Include a PDF where practical, alongside editable sources or an external source link. Do not create placeholder PDFs, decks, demos, or event records.
- Record actual event dates, languages, recordings, and source revisions when known. Do not invent missing metadata or describe planned materials as available.
- Verify security claims and runnable examples against their actual sources. Identify deliberately vulnerable workshop examples clearly and document their intended local setup.
- Preserve third-party attribution and license notices. Do not apply a new blanket license to existing materials without the owner’s direction.
- Keep recordings and large media on external hosts and link to them. Do not commit credentials, private speaker notes, attendee data, dependencies, or temporary build output.

## Tooling and verification

- Slide frameworks and dependency manifests remain local to each deck. `node scripts/build-pages.mjs` installs locked dependencies and builds all entries in `pages.json` into `_site/`; use Node 24+ and npm 11.21.0. Inspect the affected folder before choosing other tools.
- Keep any required tooling and dependency manifests local to the relevant talk or workshop unless shared tooling is explicitly requested.
- For documentation changes, check relative links, directory examples, and consistency with the actual files. No application test suite is required for prose-only changes.
- For deck or demo changes, follow local build instructions and run relevant checks when available. Inspect rendered slides when changing visual content. Report checks that could not be run.
- Keep changes focused. Do not modify unrelated talks, bulk-reformat sources, or move stable paths without updating their references.

## Git workflow

Follow the user’s requested branch and publishing scope. Use concise Conventional Commit messages. Before committing, review the staged files for unrelated changes and sensitive content. Before pushing, check for publishing workflows and follow their instructions. Do not add automatic deployment or change domain settings unless requested.

## GitHub Pages

The Pages workflow builds pull requests and deploys successful builds from `main`. Changes to slides, `pages.json`, or the publishing scripts on `main` trigger publication. Keep deployment permissions confined to the deployment job and checkout credentials disabled. Never deploy pull request code. Add new published decks to `pages.json`, use hash routing, and verify images and navigation at their actual `/talks/<slug>/` base path. Do not replace each deck’s local framework or lockfile with shared dependencies.
