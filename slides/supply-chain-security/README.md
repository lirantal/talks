# A subtle introduction to supply chain security and container signing with Sigstore and Cosign

[View published slides](https://lirantal.github.io/talks/supply-chain-security/)

A supply chain security talk by Liran Tal, covering packaging practices, software supply chain threats, and container signing with Sigstore and Cosign.

- [Slide source](src/slides.md)
- [Original Slidev starter deck](src/slides-orig.md)
- [Original repository](https://github.com/lirantal/slides-supply-chain-security)

## Organization

`src/` contains the editable Slidev deck, local component, Vite configuration, and original dependency manifests. `assets/` holds the four local screenshots used by the talk. The Vite configuration serves `../assets/` as its public directory, and the deck’s four local screenshot references use document-relative URLs so the theme can load them below the published base path. This also includes those screenshots in production builds; the original custom `media:` references were left as literal strings without copying the files. Other presentation content is preserved.

The original starter deck remains as `slides-orig.md`; it is not an additional talk or a delivered event edition. Exact delivery dates and durations are not recorded here because the imported repository does not establish them.

## Local development

The original scripts are retained. From `src/`, the intended workflow is:

```bash
npm ci
npm run dev
npm run build
```

`dev` serves `slides.md`; `build` writes the static site to `src/dist/`. `npm run export` is the original PDF export command and requires Slidev’s browser export prerequisites. No PDF export is bundled.

### Runtime compatibility

Use Node.js 24+ and npm 11.10+, as required by the original manifest. A clean `npm ci` and `npm run build` were verified with Node.js 26.5.0 and npm 11.21.0, using the committed npm policies without overrides. All four local screenshots were verified byte-for-byte in the generated output. PDF export and browser rendering were not checked.

The imported lockfile contained an old `@vueuse/motion` beta whose Nuxt edge dependencies rejected Node.js 24+. The lockfile now resolves `@vueuse/motion` 2.2.6 and compatible Nuxt dependencies within the existing dependency ranges. Slidev 0.31.4, the Penguin theme 1.4.1, Vite 2.9.9, Vue 3.2.36, the package manifest, and `.npmrc` security settings remain unchanged. `engine-strict=true`, disabled lifecycle scripts, and the release-age policy remain enabled.

The retained Vite configuration imports `vite-svg-loader`, supplied transitively by the locked theme dependency. Remote images and diagrams remain at their original URLs and require network access; their availability was not verified during this migration.

## Migration provenance

Imported from [lirantal/slides-supply-chain-security at `1d6dad3`](https://github.com/lirantal/slides-supply-chain-security/tree/1d6dad3521f9bb67b511deda213186909fe7b1db). The complete source revision is `1d6dad3521f9bb67b511deda213186909fe7b1db`. The dependency lockfile was subsequently refreshed to resolve the Node compatibility issue described above; it is not a byte-for-byte copy of that revision.

The original repository remains in place. Hosting configuration, repository contribution boilerplate, and the original repository README were not copied because they describe the standalone repository rather than this talk folder. The root GitHub Pages workflow publishes this deck. No new license is configured. No event snapshot is claimed.
