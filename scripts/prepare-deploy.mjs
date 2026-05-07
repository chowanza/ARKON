import fs from 'fs/promises';
import path from 'path';

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  console.log('📦 Preparando archivos para Webuzo/cPanel...');
  const deployDir = path.join(process.cwd(), 'deploy-webuzo');
  
  // Limpiar carpeta de despliegue previa
  await fs.rm(deployDir, { recursive: true, force: true }).catch(() => {});
  await fs.mkdir(deployDir, { recursive: true });

  // 1. Crear estructura para la carpeta "website" (Servidor Node)
  const websiteDir = path.join(deployDir, 'website');
  console.log('➡️ Copiando .next/standalone a /website...');
  try {
    await copyDir(path.join(process.cwd(), '.next', 'standalone'), websiteDir);
  } catch (error) {
    console.error('❌ Error: No se encontró .next/standalone. Asegúrate de ejecutar "npm run build" primero.');
    process.exit(1);
  }
  
  // 2. Copiar archivos estáticos
  console.log('➡️ Copiando public/ a /website/public...');
  await copyDir(path.join(process.cwd(), 'public'), path.join(websiteDir, 'public'));
  
  console.log('➡️ Copiando .next/static a /website/.next/static...');
  await copyDir(path.join(process.cwd(), '.next', 'static'), path.join(websiteDir, '.next', 'static'));

  // 3. Escribir .htaccess para que Apache sirva los estáticos directamente
  // y redirija el resto al servidor Node.js standalone
  console.log('➡️ Generando .htaccess...');
  const htaccess = `# ARKON - Webuzo/cPanel Apache Config
# Sirve archivos estáticos de Next.js directamente, sin pasar por Node.js

Options -MultiViews
RewriteEngine On

# 1. Sirve /_next/static/ directamente desde el disco
RewriteCond %{REQUEST_URI} ^/_next/static/
RewriteCond %{DOCUMENT_ROOT}/.next/static%{REQUEST_URI} -f
RewriteRule ^_next/static/(.*)$ .next/static/$1 [L]

# 2. Sirve archivos de /public/ directamente
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]

# 3. Proxy del resto al servidor Node.js (puerto configurado en Webuzo)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ http://localhost:3000%{REQUEST_URI} [P,L]
`;

  await fs.writeFile(path.join(websiteDir, '.htaccess'), htaccess, 'utf-8');

  console.log('\n✅ ¡Listo! Todo empaquetado en la carpeta "deploy-webuzo"');
  console.log('Para subirlo fácilmente a tu servidor:');
  console.log('1. Entra a la carpeta "deploy-webuzo" en tu explorador de archivos de Windows.');
  console.log('2. Selecciona la carpeta "website", haz clic derecho y envíala a un archivo .zip (ej. arkon-deploy.zip).');
  console.log('3. Sube ese archivo .zip a la carpeta raíz de tu servidor (es decir, a /home/arkonv/).');
  console.log('4. En Webuzo, dale clic derecho al .zip y selecciona "Extract".');
  console.log('   (Esto actualizará tu carpeta "website" con todos los archivos necesarios).');
  console.log('5. ¡Reinicia la app en el panel de Webuzo y el diseño cargará perfecto!');
}

main().catch(console.error);
