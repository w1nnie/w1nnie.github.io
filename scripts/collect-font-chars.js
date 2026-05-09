const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const SCAN_DIRS = ['pages', 'components', 'layouts', 'content']
const SCAN_EXTS = ['.vue', '.md', '.ts', '.js']
const OUTPUT_DIR = path.join(ROOT, 'assets', 'generated')
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'font-chars.json')

const JP_RANGE =
  /[　-〿぀-ゟ゠-ヿㇰ-ㇿ㐀-䶿一-鿿＀-￯]/g

function* walk(dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (SCAN_EXTS.some((e) => entry.name.endsWith(e))) yield full
  }
}

function collect() {
  const chars = new Set()
  for (const dir of SCAN_DIRS) {
    for (const file of walk(path.join(ROOT, dir))) {
      const text = fs.readFileSync(file, 'utf8')
      const matches = text.match(JP_RANGE)
      if (matches) for (const ch of matches) chars.add(ch)
    }
  }
  const sorted = [...chars].sort().join('')
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify({ chars: sorted, count: chars.size }, null, 2)
  )
  // eslint-disable-next-line no-console
  console.log(`[collect-font-chars] ${chars.size} unique characters → ${path.relative(ROOT, OUTPUT_FILE)}`)
}

if (require.main === module) collect()

module.exports = collect
