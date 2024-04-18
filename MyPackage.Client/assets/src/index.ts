import { UmbEntryPointOnInit } from "@umbraco-cms/backoffice/extension-api";
import { ManifestTypes } from "@umbraco-cms/backoffice/extension-registry";

// load up the manifests here.
import { manifests as dashboardManifests } from "./dashboards/manifest.ts";
import { manifests as contextManifests } from "./context/manifest";
import { manifests as sectionManifests } from "./section/manifest";
import { manifests as sidebarManifests } from "./sidebar/manifest";
import { manifests as workspaceManifests } from "./workspace/manifest";
import { manifests as documentsManifests } from "./documents/manifest";
import { manifests as headersManifests } from "./header/manifest";
import { manifests as localizationManifests } from "./localization/manifest";
import { manifests as entityActionManifests } from "./actions/entity/manifest";
import { manifests as workspaceActionManifests } from "./actions/workspace/manifest";

const manifests: Array<ManifestTypes> = [
  ...dashboardManifests,
  ...contextManifests,
  ...sectionManifests,
  ...sidebarManifests,
  ...workspaceManifests,
  ...documentsManifests,
  ...headersManifests,
  ...localizationManifests,
  ...entityActionManifests,
  ...workspaceActionManifests,
];

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
  // register them here.
  extensionRegistry.registerMany(manifests);
};
