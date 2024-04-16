import { ManifestWorkspace, ManifestWorkspaceView } from "@umbraco-cms/backoffice/extension-registry";
import { TIME_WORKSPACE_ALIAS, TIME_WORKSPACE_ENTITY_TYPE } from "../constants";

var workspaceManifest: ManifestWorkspace = {
  type: "workspace",
  alias: TIME_WORKSPACE_ALIAS,
  name: "time workspace",
  element: () => import("./workspace.element"),
  meta: {
    entityType: TIME_WORKSPACE_ENTITY_TYPE,
  },
};

var workspaceViews: Array<ManifestWorkspaceView> = [
  {
    type: "workspaceView",
    alias: "time.workspace.default",
    name: "default view",
    js: () => import("./views/defaultWorkspace.element"),
    weight: 300,
    meta: {
      icon: "icon-alarm-clock",
      pathname: "overview",
      label: "time",
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: workspaceManifest.alias,
      },
    ],
  },
];

export const manifests = [workspaceManifest, ...workspaceViews];
