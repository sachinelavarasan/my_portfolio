// Adds any note route src/app/notes/<slug>/page.tsx that's missing from src/app/notes/notes.json.
// Title and description come from the page's `export const metadata = { title, description }`.
// Existing entries are never changed. Runs automatically before `npm run build`.
//
// Usage: npm run notes:sync

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NOTES_DIR = join(process.cwd(), "src", "app", "notes");
const LIST_FILE = join(NOTES_DIR, "notes.json");
const PAGE_FILES = ["page.tsx", "page.jsx", "page.ts", "page.js", "page.mdx"];

// Reads a string field (title/description) from the `metadata` export.
const readMetadataField = (source, field) => {
  const block = source.match(/export\s+const\s+metadata[^=]*=\s*\{([\s\S]*?)\n\};?/)?.[1] ?? "";
  const match = block.match(new RegExp(`\\b${field}\\s*:\\s*(["'\`])((?:\\\\.|(?!\\1).)*)\\1`));
  return match ? match[2].replace(/\\(["'`\\])/g, "$1").trim() : "";
};

// Local date as YYYY-MM-DD
const today = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

if (!existsSync(NOTES_DIR)) {
  console.log("notes:sync: no src/app/notes folder, nothing to do.");
  process.exit(0);
}

let notes = [];
if (existsSync(LIST_FILE)) {
  try {
    notes = JSON.parse(readFileSync(LIST_FILE, "utf8"));
    if (!Array.isArray(notes)) throw new Error("notes.json must contain an array");
  } catch (err) {
    console.error(`notes:sync: can't read ${LIST_FILE}: ${err.message}`);
    process.exit(1);
  }
}

// Each sub-folder with a page file is a note (skip route groups and private folders).
const pages = readdirSync(NOTES_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory() && !/^[(_\[]/.test(e.name))
  .map((e) => ({ slug: e.name, file: PAGE_FILES.map((f) => join(NOTES_DIR, e.name, f)).find(existsSync) }))
  .filter((p) => p.file);

const known = new Set(notes.map((n) => n.slug));
const added = [];
for (const { slug, file } of pages) {
  if (known.has(slug)) continue;
  const source = readFileSync(file, "utf8");
  const entry = {
    slug,
    title: readMetadataField(source, "title") || slug,
    description: readMetadataField(source, "description"),
    added: today(),
  };
  notes.push(entry);
  added.push(entry);
}

const slugs = new Set(pages.map((p) => p.slug));
for (const note of notes) {
  if (!slugs.has(note.slug)) {
    console.warn(`notes:sync: warning: "${note.slug}" is listed but src/app/notes/${note.slug}/page.tsx doesn't exist`);
  }
}

if (added.length) {
  // Newest first, same order the hub shows.
  notes.sort((a, b) => String(b.added).localeCompare(String(a.added)) || String(a.title).localeCompare(String(b.title)));
  writeFileSync(LIST_FILE, JSON.stringify(notes, null, 2) + "\n");
  for (const n of added) console.log(`notes:sync: added "${n.slug}" (${n.title})`);
} else {
  console.log(`notes:sync: ${notes.length} note(s), list is up to date.`);
}
