# A subtle introduction to supply chain security and container signing with Sigstore and Cosign

A supply chain security talk by Liran Tal, covering packaging practices, software supply chain threats, and container signing with Sigstore and Cosign.

- [Slide source](src/slides.md)
- [Original Slidev starter deck](src/slides-orig.md)
- [Original repository](https://github.com/lirantal/slides-supply-chain-security)

## Organization

`src/` contains the editable Slidev deck, local component, Vite configuration, and original dependency manifests. `assets/` holds the four local screenshots used by the talk. The Vite configuration serves `../assets/` as its public directory, and the deck’s four local screenshot references use the corresponding root URLs. This also includes those screenshots in production builds; the original custom `media:` references were left as literal strings without copying the files. Other presentation content is preserved.

The original starter deck remains as `slides-orig.md`; it is not an additional talk or a delivered event edition. Exact delivery dates and durations are not recorded here because the imported repository does not establish them.

## Local development

The original scripts are retained. From `src/`, the intended workflow is:

```bash
npm ci
npm run dev
npm run build
```

`dev` serves `slides.md`; `build` writes the static site to `src/dist/`. `npm run export` is the original PDF export command and requires Slidev’s browser export prerequisites. No PDF export is bundled.

### Existing dependency compatibility issue

A normal `npm ci` currently fails with `EBADENGINE`. The project requires Node.js 24+ and npm 11.10+, but its locked `@nuxt/kit-edge` and `@nuxt/schema-edge` versions declare support only for Node.js 14–18. This conflict is inherited from the original repository and was reproduced there with Node.js 26.5.0 and npm 11.21.0.

The lockfile and `.npmrc` security policies, including `engine-strict=true` and disabled lifecycle scripts, are preserved. Resolving the dependency/runtime compatibility conflict is separate maintenance work. The commands above describe the intended workflow, not a successful clean installation with the preserved dependency set.

For migration verification only, a temporary diagnostic installation with `--engine-strict=false --ignore-scripts` allowed `npm run build` to complete in both the original and migrated checkout. This override is not part of the committed configuration or the normal setup instructions. All four local screenshots were verified byte-for-byte in the generated output. PDF export and browser rendering were not checked.

The retained Vite configuration imports `vite-svg-loader`, supplied transitively by the locked theme dependency. Remote images and diagrams remain at their original URLs and require network access; their availability was not verified during this migration.

## Migration provenance

Imported from [lirantal/slides-supply-chain-security at `1d6dad3`](https://github.com/lirantal/slides-supply-chain-security/tree/1d6dad3521f9bb67b511deda213186909fe7b1db). The complete source revision is `1d6dad3521f9bb67b511deda213186909fe7b1db`.

The original repository remains in place. Hosting configuration, repository contribution boilerplate, and the original repository README were not copied because they describe the standalone repository rather than this talk folder. No automatic deployment or new license is configured. No event snapshot is claimed.
