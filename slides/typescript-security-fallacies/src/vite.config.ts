import { fileURLToPath } from 'node:url'

export default {
  publicDir: fileURLToPath(new URL('../assets/', import.meta.url)),
}
