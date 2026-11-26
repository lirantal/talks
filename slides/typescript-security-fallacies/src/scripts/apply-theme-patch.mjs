import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// Apply the footer condition from the retained Neversink patch.
// Lifecycle scripts stay disabled; run this explicit local step after npm ci.
const target = fileURLToPath(new URL('../node_modules/slidev-theme-neversink/slide-bottom.vue', import.meta.url))
const original = 'v-if="$frontmatter.slide_info !== false"'
const patched = 'v-if="$slidev.configs.slide_info == true || $frontmatter.slide_info == true"'
const source = readFileSync(target, 'utf8')
if (source.includes(patched)) {
  console.log('Neversink footer patch already applied')
} else if (source.split(original).length === 2) {
  writeFileSync(target, source.replace(original, patched))
  console.log('Applied Neversink footer patch')
} else {
  throw new Error('Unexpected Neversink footer source; review the retained patch before updating it')
}
