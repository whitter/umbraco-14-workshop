import {
  ManifestMenu,
  ManifestMenuItem,
  ManifestSectionSidebarApp,
} from "@umbraco-cms/backoffice/extension-registry";
import { TIME_SECTION_ALIAS, TIME_WORKSPACE_ENTITY_TYPE } from "../constants";

const sidebarAppManifest: ManifestSectionSidebarApp = {
  type: "sectionSidebarApp",
  kind: "menuWithEntityActions",
  alias: "time.sidebar.app",
  name: "Sidebar app",
  meta: {
    label: "Time",
    menu: "time.menu",
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: TIME_SECTION_ALIAS,
    },
  ],
};

const menuManifest: ManifestMenu = {
  type: "menu",
  alias: "time.menu",
  name: "time sidebar menu",
  meta: {
    label: "Time",
  },
};

const menuItemManifest: ManifestMenuItem = {
  type: "menuItem",
  alias: "time.menu,item",
  name: "time menu item",
  meta: {
    label: "Time Zones",
    icon: "icon-alarm-clock",
    entityType: TIME_WORKSPACE_ENTITY_TYPE,
    menus: [menuManifest.alias],
  },
};

export const manifests = [sidebarAppManifest, menuManifest, menuItemManifest];
