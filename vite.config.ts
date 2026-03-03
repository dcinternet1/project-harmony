import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  appType: 'mpa',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    // Middleware para redirecionar /aro13 -> /aro13/ (serve index.html de subpastas)
    {
      name: 'mpa-trailing-slash',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] || '';
          if (!url.endsWith('/') && !path.extname(url)) {
            const dirPath = path.join(__dirname, url);
            if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
              const query = req.url?.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
              res.writeHead(301, { Location: url + '/' + query });
              res.end();
              return;
            }
          }
          next();
        });
      },
    },
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
