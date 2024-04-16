import type { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";
import { TIME_SECTION_ALIAS } from "../constants.js";

const dashboards: Array<ManifestDashboard> = [
    {
        type: 'dashboard',
        name: 'MyPackage',
        alias: 'MyPackage.dashboard',
        elementName: 'mypackage-dashboard',
        js: ()=> import('./dashboard.element.js'),
        weight: -10,
        meta: {
            label: 'MyPackage',
            pathname: 'MyPackage'
        },
        conditions: [
            {
                alias: 'Umb.Condition.SectionAlias',
                match: TIME_SECTION_ALIAS
            }
        ]
    }
]

export const manifests = [...dashboards];