import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const folders = [
  'public/carrossel-logistica',
  'public/carrossel-pessoas'
];

async function optimize() {
  for (const folder of folders) {
    const files = fs.readdirSync(folder);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const filePath = path.join(folder, file);
        const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
        const outputPath = path.join(folder, outputName);
        
        console.log(`Processing ${filePath} -> ${outputPath}...`);
        try {
          await sharp(filePath)
            .resize(1200, null, { withoutEnlargement: true })
            .webp({ quality: 75 })
            .toFile(outputPath);
          
          console.log(`Success! Saved to ${outputPath}`);
          
          // Optionally remove old files to save space if needed
          // fs.unlinkSync(filePath);
        } catch (err) {
          console.error(`Error processing ${filePath}:`, err);
        }
      }
    }
  }

  // Optimize Soluções Integradas
  const soloInput = 'public/solucoes-integradas.png';
  const soloOutput = 'public/solucoes-integradas.webp';
  if (fs.existsSync(soloInput)) {
    console.log(`Processing ${soloInput}...`);
    try {
      await sharp(soloInput)
        .resize(1600, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(soloOutput);
      console.log(`Success! Saved to ${soloOutput}`);
    } catch (err) {
      console.error(`Error processing ${soloInput}:`, err);
    }
  }
}

optimize().then(() => console.log('Optimization complete.'));
