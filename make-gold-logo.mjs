import sharp from 'sharp';
import path from 'path';

const inputPath = path.resolve('public/AUSA-Logo.png');
const outputPath = path.resolve('public/AUSA-Logo-Gold.png');

const GOLD = { r: 212, g: 168, b: 67 };
const BLACK = { r: 0, g: 0, b: 0 };

async function makeGoldLogo() {
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();

  const rawBuffer = await image.ensureAlpha().raw().toBuffer();
  const pixels = Buffer.from(rawBuffer);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    if (a > 0) {
      // If it's a dark pixel (likely our previously added border or dark edge), make it black
      if (r < 60 && g < 60 && b < 80) {
        pixels[i] = BLACK.r;
        pixels[i + 1] = BLACK.g;
        pixels[i + 2] = BLACK.b;
      } 
      // Otherwise, it's content (blue text, red wave, etc.), make it gold
      else {
        pixels[i] = GOLD.r;
        pixels[i + 1] = GOLD.g;
        pixels[i + 2] = GOLD.b;
      }
    }
  }

  await sharp(pixels, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile(outputPath);

  console.log(`✅ Saved gold logo to: ${outputPath}`);
}

makeGoldLogo().catch(console.error);
