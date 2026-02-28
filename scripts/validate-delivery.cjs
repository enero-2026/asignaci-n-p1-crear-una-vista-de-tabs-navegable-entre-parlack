const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();

const requiredPaths = [
  'parcial1/app/_layout.tsx',
  'parcial1/app/index.tsx',
  'parcial1/app/buscar.tsx',
  'parcial1/app/perfil.tsx',
  'parcial1/src/components/navigation/FloatingTabBar.tsx',
  'parcial1/src/components/Icon.tsx',
  'parcial1/src/screens/InicioScreen.tsx',
  'parcial1/src/screens/BuscarScreen.tsx',
  'parcial1/src/screens/PerfilScreen.tsx',
];

const missing = requiredPaths.filter((relativeFile) => {
  const filePath = path.join(projectRoot, relativeFile);
  return !fs.existsSync(filePath);
});

if (missing.length > 0) {
  console.error('Faltan archivos requeridos para la entrega:');
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log('Entrega validada correctamente.');
process.exit(0);
