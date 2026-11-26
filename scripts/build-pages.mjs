import { readFile, mkdir, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve, join } from 'node:path'
import { spawnSync } from 'node:child_process'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = join(root, '_site')
const decks = JSON.parse(await readFile(join(root, 'pages.json'), 'utf8'))
const base = process.env.PAGES_BASE_PATH || '/talks/'
if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base))
  throw new Error('PAGES_BASE_PATH must start and end with / and contain only path segments')

const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
const env = { ...process.env }
delete env.VSCODE_CWD
const run = (command, args, cwd) => {
  const result = spawnSync(command, args, { cwd, env, stdio: 'inherit' })
  if (result.error) throw result.error
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed (${result.status})`)
}

const slugs = new Set()
for (const deck of decks) {
  for (const segment of [deck.slug, deck.source || deck.slug]) {
    if (!/^[a-z0-9]+(?:[/-][a-z0-9]+)*$/.test(segment)) throw new Error(`Invalid deck path: ${segment}`)
  }
  if (!/^[a-zA-Z0-9-]+\.md$/.test(deck.entry)) throw new Error(`Invalid entry: ${deck.entry}`)
  if (slugs.has(deck.slug)) throw new Error(`Duplicate URL: ${deck.slug}`)
  slugs.add(deck.slug)
}

await rm(output, { recursive: true, force: true })
await mkdir(output, { recursive: true })
const installed = new Set()
for (const deck of decks) {
  const cwd = resolve(root, 'slides', deck.source || deck.slug, 'src')
  if (!installed.has(cwd)) {
    run('npm', ['ci', '--no-audit', '--no-fund'], cwd)
    const manifest = JSON.parse(await readFile(join(cwd, 'package.json'), 'utf8'))
    if (manifest.scripts?.['prepare:theme']) run('npm', ['run', 'prepare:theme'], cwd)
    installed.add(cwd)
  }
  const args = ['build', deck.entry, '--base', `${base}${deck.slug}/`, '--out', join(output, deck.slug)]
  if (deck.localTheme) args.push('--theme', './')
  run(join(cwd, 'node_modules/.bin/slidev'), args, cwd)
  await readFile(join(output, deck.slug, 'index.html'))
}

const links = decks.map(deck => `<li><a href="${escape(base + deck.slug + '/')}">${escape(deck.title)}</a>${deck.description ? `<p>${escape(deck.description)}</p>` : ''} <a class="source" href="https://github.com/lirantal/talks/tree/main/slides/${escape(deck.source || deck.slug)}">Source</a></li>`).join('\n')
await writeFile(join(output, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Liran Tal’s Talks</title>
<style>body{font:1.1rem/1.6 system-ui,sans-serif;max-width:55rem;margin:4rem auto;padding:0 1.5rem;color:#1d2433;background:#fafafa}a{color:#3d47aa}li{margin:1.4rem 0}p{margin:.3rem 0}.source{font-size:.85rem;display:block}h1{line-height:1.2}</style></head>
<body><main><h1>Liran Tal’s Talks</h1><p>Presentation slides, by <a href="https://lirantal.com">Liran Tal</a>.</p><ul>${links}</ul><p><a href="https://github.com/lirantal/talks">Repository and workshop materials</a> · <a href="https://lirantal.com/speaking">Invite me to speak</a></p></main></body></html>\n`)
await writeFile(join(output, '.nojekyll'), '')
console.log(`Built ${decks.length} decks in ${output}`)
