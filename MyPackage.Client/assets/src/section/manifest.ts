import { ManifestSection } from "@umbraco-cms/backoffice/extension-registry";
import { TIME_SECTION_ALIAS } from "../constants";

const sectionManifest: ManifestSection = {
  type: "section",
  alias: TIME_SECTION_ALIAS,
  name: "time section",
  weight: 10,
  meta: {
    label: "Time",
    pathname: "time",
  },
};

export const manifests = [ sectionManifest ];
