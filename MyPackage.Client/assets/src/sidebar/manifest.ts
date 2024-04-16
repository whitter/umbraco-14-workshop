import {
  ManifestMenu,
  ManifestMenuItem,
  ManifestSectionSidebarApp,
} from "@umbraco-cms/backoffice/extension-registry";
import { TIME_MENU_ALIAS, TIME_SECTION_ALIAS } from "../constants";

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
  alias: TIME_MENU_ALIAS,
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
    entityType: "",
    menus: [TIME_MENU_ALIAS],
  },
};

export const manifests = [sidebarAppManifest, menuManifest, menuItemManifest];
