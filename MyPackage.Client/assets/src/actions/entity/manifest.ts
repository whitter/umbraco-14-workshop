import { ManifestEntityActionDefaultKind } from "@umbraco-cms/backoffice/extension-registry";
import {
  UMB_DOCUMENT_ENTITY_TYPE,
} from "@umbraco-cms/backoffice/document";

const entityAction: ManifestEntityActionDefaultKind = {
  type: "entityAction",
  kind: "default",
  alias: "time.entity.action",
  name: "tell me the time action",
  weight: -100,
  forEntityTypes: [UMB_DOCUMENT_ENTITY_TYPE],
  api: () => import('./time.entity.action'),
  meta: {
    icon: "icon-alarm-clock",
    label: "time action",
  },
};

export const manifests = [entityAction];
