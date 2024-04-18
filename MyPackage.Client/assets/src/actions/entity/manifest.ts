import { ManifestEntityAction } from "@umbraco-cms/backoffice/extension-registry";
import {
  UMB_DOCUMENT_ENTITY_TYPE,
} from "@umbraco-cms/backoffice/document";
import TimeEntityAction from "./time.entity.action";

const entityAction: ManifestEntityAction = {
  type: "entityAction",
  alias: "time.entity.action",
  name: "tell me the time action",
  weight: -100,
  forEntityTypes: [UMB_DOCUMENT_ENTITY_TYPE],
  api: TimeEntityAction,
  meta: {
    icon: "icon-alarm-clock",
    label: "time action",
  },
};

export const manifests = [entityAction];
