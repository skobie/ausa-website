import sharp from 'sharp';
import path from 'path';

const inputPath = path.resolve('public/AUSA-Logo-Gold.png');
const outputPath = path.resolve('public/AUSA-Logo-Gold-NoBorder.png');

async function makeGoldNoBorderLogo() {
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();

  const rawBuffer = await image.ensureAlpha().raw().toBuffer();
  const pixels = Buffer.from(rawBuffer);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    // If pixel is pure black (the outline we added), make it transparent
    if (a > 0 && r === 0 && g === 0 && b === 0) {
      pixels[i + 3] = 0; // Alpha to 0
    }
  }

  await sharp(pixels, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile(outputPath);

  console.log(`✅ Saved gold logo without border to: ${outputPath}`);
}

makeGoldNoBorderLogo().catch(console.error);
