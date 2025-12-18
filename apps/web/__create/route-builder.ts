import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { Hono } from "hono";
import type { Handler } from "hono";

const API_BASENAME = "/api";
const api = new Hono();

// Directory delle API
const API_DIR = join(process.cwd(), "src/app/api");

// ---- utils -------------------------------------------------

async function findRouteFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir);
  const routes: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      routes.push(...(await findRouteFiles(fullPath)));
    } else if (/^route\.(js|ts)$/.test(entry)) {
      routes.push(fullPath);
    }
  }

  return routes;
}

function filePathToHonoPath(filePath: string): string {
  const relative = filePath
      .replace(API_DIR, "")
      .replace(/\\/g, "/")
      .replace(/\/route\.(js|ts)$/, "");

  if (!relative) return "/";

  return relative
      .split("/")
      .map((segment) => {
        const match = segment.match(/^\[(\.{3})?(.+)\]$/);
        if (!match) return segment;
        const [, dots, name] = match;
        return dots ? `:${name}{.+}` : `:${name}`;
      })
      .join("/");
}

// ---- register ----------------------------------------------

async function registerRoutes() {
  const files = (await findRouteFiles(API_DIR)).sort(
      (a, b) => b.length - a.length,
  );

  api.routes = [];

  for (const file of files) {
    const url = pathToFileURL(file).href;
    const routeModule = await import(
        /* @vite-ignore */ url
        );

    const honoPath = filePathToHonoPath(file);
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

    for (const method of methods) {
      const handlerFn = routeModule[method];
      if (!handlerFn) continue;

      const handler: Handler = async (c) => {
        return handlerFn(c.req.raw, {
          params: c.req.param(),
        });
      };

      api[method.toLowerCase() as "get"](honoPath, handler);

      console.log(`[API] ${method} ${API_BASENAME}${honoPath}`);
    }
  }
}

// ---- init --------------------------------------------------

// @ts-ignore
await registerRoutes();

// @ts-ignore
if (import.meta.env.DEV && import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(() => {
    registerRoutes().catch(console.error);
  });
}

export { api, API_BASENAME };
