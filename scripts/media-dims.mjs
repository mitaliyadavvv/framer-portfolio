// Writes src/content/media-dims.json: { "<file>": [width, height] } for every image in public/media.
// Videos are measured separately (see README).
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = "public/media";
const out = "src/content/media-dims.json";
const prev = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const files = [];
for (const sub of ["", "cap"]) {
  const d = path.join(dir, sub);
  if (!fs.existsSync(d)) continue;
  for (const f of fs.readdirSync(d)) if (/\.(png|jpe?g|webp|gif|svg)$/i.test(f)) files.push(path.join(sub, f));
}
// keep video entries (measured separately); rebuild every image entry from disk
const dims = Object.fromEntries(Object.entries(prev).filter(([k]) => k.endsWith(".mp4") && fs.existsSync(path.join(dir, k))));
for (const f of files) {
  const m = await sharp(path.join(dir, f)).metadata();
  dims[f] = [m.width, m.height];
}
fs.writeFileSync(out, JSON.stringify(dims, null, 0).replace(/\],/g, "],\n"));
console.log(Object.keys(dims).length, "entries");
