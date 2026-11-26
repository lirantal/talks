# How React Applications Get Hacked in the Real World

Presentation source by Liran Tal, imported from `slides-react-security-2022`.

- [Editable slide source](src/slides.md)
- [Original repository](https://github.com/lirantal/slides-react-security-2022)

## Included materials

`src/` contains the original Slidev deck, custom Vue components, global footer, dependency manifest and lockfile, and npm security settings. The imported source has a talk cover and speaker introduction followed by Purplin theme and Slidev starter examples. It does not contain the complete React security presentation; that source limitation is preserved rather than replacing it with invented content.

There are no local image assets in this source revision. Images are remotely hosted and require network access. No PDF or verified event-specific edition was present to import.

## Local development

The source manifest requires Node.js 24+ and npm 11.10.0+. The migration was checked with Node.js 26.5.0 and npm 11.21.0. From this talk’s `src/` directory:

```bash
npm ci
npm run dev
npm run build
```

`dev` starts Slidev and opens the browser at http://localhost:3030. `build` generates `src/dist/`. Keep the included `.npmrc` policies enabled; dependency installation ignores lifecycle scripts. `npm run export` is the original PDF export command and requires the browser export prerequisites for this older Slidev version; an export is not included here.

## Validation and compatibility

A clean `npm ci --no-audit --no-fund` and `npm run build` both pass on Node.js 26.5.0 and npm 11.21.0, without engine flags or dependency overrides. The original `.npmrc` policies remain enabled, including strict engine checking and disabled lifecycle scripts.

The imported lockfile pinned `@vueuse/motion` to a beta that requested obsolete Nuxt edge prereleases restricted to Node 14–18. Refreshing that transitive dependency within Slidev’s existing allowed range resolves `@vueuse/motion` 2.2.6 and stable `@nuxt/kit` 3.21.11, which supports Node 18.12+. Slidev, its theme, the package manifest, and presentation sources are unchanged. The refreshed versions are locked for repeatable installation.

PDF export and a visual browser review were not performed. The slide content and Vue sources are unchanged.

## Migration provenance

Imported from [lirantal/slides-react-security-2022 at `f1592eb`](https://github.com/lirantal/slides-react-security-2022/tree/f1592ebae8846df1d811e7f02787dfb9b9a20710). The imported slide sources, components, footer, package manifest, and npm settings are byte-for-byte copies. The lockfile’s animation dependency branch was refreshed to fix Node compatibility; no framework upgrades or slide rewrites were made.

The original repository remains in place. Repository-level hosting configuration and contribution boilerplate were not imported. No automatic deployment is configured for this talk in this repository.
