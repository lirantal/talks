# Friend or Foe? TypeScript Security Fallacies

TypeScript security slides by Liran Tal, with the original default, 25-minute, and 40-minute variants.

| Variant | Source | Cover label |
| --- | --- | --- |
| Default | [slides.md](src/slides.md) | JavaScript Israel 2025 |
| 25 minutes | [slides-25m.md](src/slides-25m.md) | WeAreDevelopers 2025 |
| 40 minutes | [slides-40m.md](src/slides-40m.md) | OWASP AppSec IL |

These labels come from the slide covers. They do not establish the date or exact delivered revision, so no archived event edition is claimed.

## Local development

Requires Node.js 24+ and npm 11.10.0 or newer. From this talk’s `src/` directory:

```bash
npm ci
npm run prepare:theme
npm run dev
```

The source’s npm security policy remains enabled, including disabled lifecycle scripts. `prepare:theme` explicitly applies the existing Neversink footer condition using Node’s standard library; it replaces the upstream `postinstall` command that invoked an undeclared `patch-package` dependency. The original patch is preserved in `src/patches/`. Rerunning the step is safe; it fails if the expected footer source changes.

Build each variant separately:

```bash
npm run build
npm run build:25m
npm run build:40m
```

Outputs are `src/dist/`, `src/dist-25m/`, and `src/dist-40m/`. `npm run dev:1` and `npm run dev:2` retain the upstream 40-minute and 25-minute development commands. `npm run export` targets the default deck and requires Slidev’s Playwright/Chromium export prerequisites. No PDF export is included.

Images are in `assets/`; `src/vite.config.ts` serves them as public assets and deck paths reference them from the site root. Slidev’s image layout helper applies the build base path to frontmatter image URLs. Custom layouts, styles, the footer component, imported page example, and code snippets remain in `src/`. Remote images, fonts, and embedded content require network access. Code samples demonstrate security pitfalls; they are not setup commands.

## Migration provenance

Imported from [lirantal/slides-typescript-security at `91d08e6`](https://github.com/lirantal/slides-typescript-security/tree/91d08e6b0ee6b790d05555326ac14d143ac82d2a).

All three deck variants and the image files are preserved. Slide content changes are limited to image paths. Dependency versions and integrity entries remain unchanged; the lockfile’s root lifecycle-script metadata was updated to match removal of `postinstall`.

The original repository remains in place. Repository-level hosting configuration, contribution boilerplate, and GitHub metadata were not imported. No deployment or domain configuration is added here.
