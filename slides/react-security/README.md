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

A normal `npm ci` currently fails with `EBADENGINE`: the locked `@nuxt/kit-edge` and `@nuxt/schema-edge` prereleases declare support for Node.js 14/16/17/18, while this source revision requires Node.js 24+ and enables strict engine checking. The same failure was reproduced in the original repository. The migration preserves its dependency versions and `.npmrc` rather than silently changing that policy.

A diagnostic install with engine checking disabled for that one command, while lifecycle scripts stayed disabled, was used to assess the deck separately from the conflicting engine declarations. The original `npm run build` then passed and produced `src/dist/index.html`. This diagnostic does not make the normal installation path pass. Updating the historical toolchain is separate work.

PDF export and a visual browser review were not performed. The slide content and Vue sources are unchanged.

## Migration provenance

Imported from [lirantal/slides-react-security-2022 at `f1592eb`](https://github.com/lirantal/slides-react-security-2022/tree/f1592ebae8846df1d811e7f02787dfb9b9a20710). All imported slide sources, components, footer, package files, and npm settings are byte-for-byte copies. No dependency upgrades or slide rewrites were made.

The original repository remains in place. Repository-level hosting configuration and contribution boilerplate were not imported. No automatic deployment is configured for this talk in this repository.
