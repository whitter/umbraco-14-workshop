import { ManifestHeaderApp, ManifestModal } from "@umbraco-cms/backoffice/extension-registry";
import { TIME_HEADER_MODAL_ALIAS } from "../constants";

const header: ManifestHeaderApp = {
  type: "headerApp",
  alias: "time.header.app",
  name: "time app",
  js: () => import("./time-header-element"),
  weight: 850,
  meta: {
    label: "time",
    icon: "icon-alarm-clock",
    pathname: "time",
  },
};

const modal: ManifestModal = {
  type: 'modal',
  alias: TIME_HEADER_MODAL_ALIAS,
  name: 'time header modal',
  js: () => import('./time-header-modal'),
}

export const manifests = [header, modal];
