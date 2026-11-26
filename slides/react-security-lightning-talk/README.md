# How React Applications Get Hacked in the Real World — Lightning Talk

The React Summit 2022 lightning version: security best practices in seven minutes, covering output encoding and XSS escape hatches in React applications.

- [Slide source](src/slides.md)
- [Hosted slides](https://slides-react-security-lightning-talk-2022.vercel.app)
- [Images](assets/)

## Local development

The original package specifies Node.js 24+ and npm 11.10.0+. Its preserved lockfile also contains `@nuxt/kit-edge` and `@nuxt/schema-edge` versions that only accept Node 14–18. With `engine-strict=true`, the standard install currently fails with `EBADENGINE`; this was reproduced in the unchanged original repository. Dependency modernization is separate from this migration.

The existing development commands, run from this talk’s `src/` directory, are:

```bash
npm ci
npm run dev
npm run build
```

`dev` opens the presentation at http://localhost:3030. `build` writes the static site into `src/dist/`. `npm run export` exports a PDF and requires the browser tooling supported by this version of Slidev; no PDF is included in the import.

Dependencies are locked and the original `.npmrc` security settings are retained, including disabled install scripts. The deck uses Slidev 0.31 and its original theme; migration does not upgrade the presentation framework. Images live in `assets/`, beside `src/`; `src/vite.config.ts` serves that directory as public assets, and the slide image references were adjusted accordingly. Remote images, fonts, and embedded services require network access.

## Validation

On Node.js 26.5.0 with npm 11.21.0, the standard locked install fails with the engine conflict above. For migration verification only, a temporary `npm ci --engine-strict=false --ignore-scripts --no-audit --no-fund` install succeeded and `npm run build` passed. The committed security settings are unchanged. Every image matches the source byte for byte, every adjusted asset reference resolves, and slide content is unchanged apart from those paths. PDF export and browser playback were not verified.

## Migration provenance

Imported from [lirantal/slides-react-security-lightning-talk-2022 at `5e45792`](https://github.com/lirantal/slides-react-security-lightning-talk-2022/tree/5e457928e60baaac290bf6c46b3a37dd9487ca89). The original deck, image files, components, keyboard shortcuts, metadata, dependency manifest, and lockfile are retained. Only local asset references and their public-directory configuration were changed to fit this repository’s layout.

The source identifies React Summit 2022 but does not establish an exact delivered snapshot, so the files remain current imported source rather than a dated event edition. The original repository and hosted presentation remain in place. Hosting configuration and repository administration files were not imported; no deployment is configured here.

Code samples demonstrate security vulnerabilities for presentation purposes. Do not run attack payloads as setup commands.
