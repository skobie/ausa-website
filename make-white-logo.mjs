import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputPath = path.resolve('public/AUSA-Logo.png');
const outputPath = path.resolve('public/AUSA-Logo-White.png');

async function makeLogoWhite() {
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();

  // Get raw pixel data (RGBA)
  const rawBuffer = await image.ensureAlpha().raw().toBuffer();
  const pixels = Buffer.from(rawBuffer);

  // Set all non-transparent pixels to white
  for (let i = 0; i < pixels.length; i += 4) {
    const a = pixels[i + 3];
    if (a > 0) {
      pixels[i] = 255;     // R
      pixels[i + 1] = 255; // G
      pixels[i + 2] = 255; // B
    }
  }

  // Save as PNG
  await sharp(pixels, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log(`✅ Saved white logo to: ${outputPath}`);
}

makeLogoWhite().catch(console.error);
