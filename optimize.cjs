const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const folders = [
  'public/carrossel-logistica',
  'public/carrossel-pessoas'
];

async function optimize() {
  for (const folder of folders) {
    const files = fs.readdirSync(folder);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const filePath = path.join(folder, file);
        console.log(`Optimizing ${filePath}...`);
        try {
          const image = await Jimp.read(filePath);
          // Resize to max 1200 width if larger
          if (image.bitmap.width > 1200) {
            image.resize(1200, Jimp.AUTO);
          }
          await image.quality(70).writeAsync(filePath);
          console.log(`Done optimizing ${filePath}`);
        } catch (err) {
          console.error(`Error optimizing ${filePath}:`, err);
        }
      }
    }
  }

  // Optimize individual file
  const solo = 'public/solucoes-integradas.png';
  if (fs.existsSync(solo)) {
    console.log(`Optimizing ${solo}...`);
    try {
      const image = await Jimp.read(solo);
      if (image.bitmap.width > 1600) {
        image.resize(1600, Jimp.AUTO);
      }
      await image.quality(75).writeAsync(solo);
    } catch (err) {}
  }
}

optimize().then(() => console.log('All optimizations done.'));
