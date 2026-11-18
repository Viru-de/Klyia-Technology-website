import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type ResolvedConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/client/src/assets so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      (() => {
        let outDir = 'dist';
        let isSsr = false;
        return {
          name: 'copy-unbundled-src-assets',
          apply: 'build' as const,
          configResolved(resolvedConfig: ResolvedConfig) {
            outDir = resolvedConfig.build.outDir;
            isSsr = Boolean(resolvedConfig.build.ssr);
          },
          closeBundle(error?: Error): void {
            if (error || isSsr) {
              return;
            }
            const distDir = path.resolve(import.meta.dirname, outDir);
            const srcAssets = path.resolve(import.meta.dirname, 'src/assets');
            const distAssets = path.resolve(distDir, 'src/assets');
            if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
              fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
            }
          },
        };
      })(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
