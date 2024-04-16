import { ManifestGlobalContext } from "@umbraco-cms/backoffice/extension-registry";

export const contexts: Array<ManifestGlobalContext> = [
  {
    type: "globalContext",
    alias: "time.context",
    name: "Time context",
    js: () => import("./time.context.ts"),
  },
];
