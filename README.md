# Liran Tal’s Talks

Slides, presentation sources, demos, and workshop materials by [Liran Tal](https://lirantal.com).

- [View published slides](https://lirantal.github.io/talks/)
- [Slide sources and presentation materials](slides/)
- [Workshops](workshops/)
- [Speaking and invitations](https://lirantal.com/speaking)
- [Public-speaking history](https://github.com/lirantal/public-speaking)

## Organization

Materials are grouped by talk or workshop. Each has a stable, descriptive folder name, even when it is delivered at several events or its title changes slightly. Dates belong to individual editions.

```text
talks/
├── README.md
├── AGENTS.md
├── slides/                 # One folder per talk
├── workshops/              # One folder per workshop
└── shared/
    ├── assets/             # Images used by multiple talks
    └── themes/             # Reusable slide styling
```

The following illustrates how a talk and a workshop can grow. These are examples, not materials already included in this repository:

```text
slides/
└── your-ai-agent-installed-malware/
    ├── README.md
    ├── abstract.md
    ├── src/                # Editable slide sources, if applicable
    ├── assets/             # Images and diagrams specific to this talk
    ├── demos/              # Small demos or links to separate demo repos
    └── editions/
        └── 2026-10-23-agntcon/
            ├── README.md   # Event, language, recording, and source revision
            └── slides.pdf  # Slides presented at this event

workshops/
└── nodejs-secure-coding/
    ├── README.md
    ├── prerequisites.md
    ├── slides/
    ├── exercises/
    │   ├── 01-path-traversal/
    │   └── 02-command-injection/
    └── solutions/
```

## Adding materials

1. Create `slides/<talk-slug>/` or `workshops/<workshop-slug>/`. Use lowercase words separated by hyphens; omit the year and event from the main folder name.
2. Add a `README.md` with the title, abstract, audience, duration, and links to the available materials. Include local setup instructions when needed.
3. Add the materials in their original format. HTML, Markdown, PowerPoint, and Keynote are welcome, as are links to externally hosted decks. Include a PDF where practical. A simple talk can start with just `README.md` and `slides.pdf`.
4. Add an edition when there are event-specific materials to preserve. Name it `YYYY-MM-DD-event-slug`, link to its slides and recording, and record the source commit when available. Preserve the delivered version; make subsequent changes in the current sources or a new edition.
5. Link the new talk or workshop from the relevant directory index.

Create subfolders only when they contain useful materials. Keep talk-specific assets beside the talk; use `shared/` for resources used by multiple talks. Keep small demos here and link to independently maintained demo repositories.

Store recordings on a video host and link to them. Prefer external downloads for large binary assets so cloning the repository stays practical. Add build instructions per deck; there is no repository-wide slide framework or build command.

## Relationship to other sites

| Location | Purpose |
| --- | --- |
| [lirantal.com/speaking](https://lirantal.com/speaking) | Discover talks, watch recordings, and invite me to speak |
| [lirantal/public-speaking](https://github.com/lirantal/public-speaking) | Event history, engagement details, and photos |
| This repository | Slides, editable sources, demos, and workshop materials |

Link to existing event records instead of copying the full speaking archive here. Event records can link back to the exact edition of the materials.

## Published slides

GitHub Pages serves each deck at `https://lirantal.github.io/talks/<talk-slug>/`. The TypeScript 25-minute and 40-minute variants are at `typescript-security-fallacies/25m/` and `typescript-security-fallacies/40m/`. The [published index](https://lirantal.github.io/talks/) links to every deck. Slide navigation uses URL fragments so links to individual slides survive refreshes on static hosting.

The [Publish slides workflow](.github/workflows/pages.yml) builds on pull requests and publishes successful builds from `main`, or when manually dispatched on `main`. Builds use Node.js 24, npm 11.21.0, each deck’s lockfile and npm security settings, and each deck’s own Slidev version. Only built static files are uploaded. Build jobs have read-only repository access; the separate deployment job receives Pages permissions.

To build the complete site locally with Node.js 24+ and npm 11.21.0:

```bash
node scripts/build-pages.mjs
```

This installs locked dependencies per talk and writes the site to `_site/`. For a simple local preview at the server root, build with `PAGES_BASE_PATH=/ node scripts/build-pages.mjs`, then run `python3 -m http.server 4173 --directory _site` and open http://localhost:4173. There is no shared slide framework dependency. The build defaults to `/talks/`; set `PAGES_BASE_PATH` to a slash-delimited path when testing a different prefix.

To publish another deck, add its source and lockfile under `slides/<talk-slug>/src/`, use `routerMode: hash` in its Slidev headmatter, and add an entry to [pages.json](pages.json). Use a separate entry with `source` for variants sharing dependencies. Verify the deck’s public asset URLs under its published base path before merging. Publication is all-or-nothing: a failed deck build leaves the previous site deployed.
