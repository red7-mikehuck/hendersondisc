// One-off build-time helper: optimises the Red7-produced source images into
// web-ready files under /public. Run: node scripts/process-images.mjs
import sharp from "sharp";
import { mkdir, unlink, rename } from "node:fs/promises";

const IMG = "public/images";
const opts = { quality: 82, mozjpeg: true };

// Generated imagery → sized JPGs (next/image will make AVIF/WebP on demand)
await sharp(`${IMG}/hero-active-couple.png`).resize({ width: 2400 }).jpeg(opts).toFile(`${IMG}/hero-active-couple.jpg`);
await sharp(`${IMG}/hero-grandkids.png`).resize({ width: 1600 }).jpeg(opts).toFile(`${IMG}/hero-grandkids.jpg`);
await sharp(`${IMG}/decompression-diagram.png`).resize({ width: 1400 }).jpeg({ quality: 88, mozjpeg: true }).toFile(`${IMG}/decompression-diagram.jpg`);
await sharp(`${IMG}/brand-texture.png`).resize({ width: 2000 }).jpeg({ quality: 70, mozjpeg: true }).toFile(`${IMG}/brand-texture.jpg`);

// OG image 1200x630 from the hero
await sharp(`${IMG}/hero-active-couple.png`).resize(1200, 630, { fit: "cover", position: "right" }).jpeg({ quality: 80 }).toFile(`${IMG}/og-image.jpg`);

// Logo: trim white margin, keep as PNG with white → transparent-ish edge safe (kept opaque white for fidelity)
await sharp(`${IMG}/dcoa-logo.jpg`).trim({ threshold: 20 }).png({ compressionLevel: 9 }).toFile(`${IMG}/dcoa-logo.png`);
// Also a compact width for the header
await sharp(`${IMG}/dcoa-logo.png`).resize({ width: 720 }).png({ compressionLevel: 9 }).toFile(`${IMG}/dcoa-logo-720.png`);

// Real photos → cap width, re-encode
const photos = [
  ["dcoa-doctor", 1200], ["dcoa-dr-shepard", 1000], ["dcoa-clinic-exterior", 1200], ["dcoa-treatment-room", 900],
  ["dcoa-patient-01", 1000], ["dcoa-patient-02", 1000], ["dcoa-patient-03", 1000], ["dcoa-patient-04", 1000], ["dcoa-patient-05", 1000], ["dcoa-patient-06", 1000],
];
for (const [n, w] of photos) {
  await sharp(`${IMG}/${n}.jpg`).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(opts).toFile(`${IMG}/${n}.tmp.jpg`);
  await unlink(`${IMG}/${n}.jpg`); await rename(`${IMG}/${n}.tmp.jpg`, `${IMG}/${n}.jpg`);
}

// Icons from the Red7 icon tile
await mkdir("public/icons", { recursive: true });
for (const s of [16, 32, 48, 180, 192, 512]) {
  await sharp(`${IMG}/app-icon-src.png`).resize(s, s).png().toFile(`public/icons/icon-${s}.png`);
}
await sharp(`${IMG}/app-icon-src.png`).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp(`${IMG}/app-icon-src.png`).resize(32, 32).png().toFile("public/favicon-32.png");
await sharp(`${IMG}/app-icon-src.png`).resize(512, 512).png().toFile(`${IMG}/app-icon.png`);

// Remove the heavy PNG masters now that JPGs exist
for (const f of ["hero-active-couple.png", "hero-grandkids.png", "decompression-diagram.png", "brand-texture.png", "app-icon-src.png"]) {
  await unlink(`${IMG}/${f}`);
}
console.log("done");
