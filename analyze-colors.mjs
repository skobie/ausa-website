import sharp from 'sharp';
import path from 'path';

const inputPath = path.resolve('public/AUSA-Logo.png');

async function analyzeColors() {
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();

  const rawBuffer = await image.ensureAlpha().raw().toBuffer();
  const pixels = Buffer.from(rawBuffer);

  const colors = {};

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    if (a > 50) {
      // Bucket colors to reduce noise (e.g. round to nearest 10)
      const rB = Math.round(r / 10) * 10;
      const gB = Math.round(g / 10) * 10;
      const bB = Math.round(b / 10) * 10;
      const key = `${rB},${gB},${bB}`;
      colors[key] = (colors[key] || 0) + 1;
    }
  }

  const sortedColors = Object.entries(colors)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  console.log('Dominant colors (R,G,B):');
  sortedColors.forEach(([color, count]) => {
    console.log(`${color}: ${count} pixels`);
  });
}

analyzeColors().catch(console.error);
