import { defineConfig, type PreviewServer, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";
import type { IncomingMessage, ServerResponse } from "http";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  appType: "mpa",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    {
      name: "fix-noscript-in-head",
      transformIndexHtml(html: string) {
        // Comenta <noscript> com <img> dentro do <head> para evitar erro parse5
        return html.replace(/<noscript[\s>][\s\S]*?<\/noscript>/gi, (match) => {
          if (match.includes("<img")) {
            return `<!-- NOSCRIPT REMOVIDO PELO VITE -->\n<!-- ${match.replace(/--/g, "- -")} -->`;
          }
          return match;
        });
      },
    },
    {
      name: "mpa-trailing-slash",
      configureServer(server: ViteDevServer) {
        const applyRedirect = (req: IncomingMessage, res: ServerResponse, next: () => void) => {
          const rawUrl = req.url || "";
          const pathname = rawUrl.split("?")[0] || "";
          const cleanPath = pathname.replace(/^\/+/, "");

          if (cleanPath && !pathname.endsWith("/") && !path.extname(pathname)) {
            const dirPath = path.join(__dirname, cleanPath);
            if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
              const query = rawUrl.includes("?") ? rawUrl.substring(rawUrl.indexOf("?")) : "";
              res.writeHead(301, { Location: `/${cleanPath}/${query}` });
              res.end();
              return;
            }
          }

          next();
        };

        server.middlewares.use(applyRedirect);
      },
      configurePreviewServer(server: PreviewServer) {
        server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
          const rawUrl = req.url || "";
          const pathname = rawUrl.split("?")[0] || "";
          const cleanPath = pathname.replace(/^\/+/, "");

          if (cleanPath && !pathname.endsWith("/") && !path.extname(pathname)) {
            const dirPath = path.join(__dirname, cleanPath);
            if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
              const query = rawUrl.includes("?") ? rawUrl.substring(rawUrl.indexOf("?")) : "";
              res.writeHead(301, { Location: `/${cleanPath}/${query}` });
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
