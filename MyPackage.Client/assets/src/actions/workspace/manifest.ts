import { ManifestWorkspaceActionDefaultKind } from "@umbraco-cms/backoffice/extension-registry";

const action: ManifestWorkspaceActionDefaultKind = {
  type: "workspaceAction",
  kind: "default",
  alias: "time.workspace.action",
  name: "time workspace action",
  api: () => import('./time.action'),
  meta: {
    label: "Time Action",
    look: "primary",
    color: "default",
  },
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: "Umb.Workspace.Document",
    },
  ],
};

export const manifests = [action];
