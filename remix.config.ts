import type { AppConfig } from "@remix-run/dev";

const config: AppConfig = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
};
export default config;
