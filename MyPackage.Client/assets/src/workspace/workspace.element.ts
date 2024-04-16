import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import {
  LitElement,
  html,
  customElement,
} from "@umbraco-cms/backoffice/external/lit";
import TimeWorkspaceContext from "./context";
import { TIME_WORKSPACE_ALIAS } from "../constants";

@customElement("time-workspace-root")
export class TimeWorkspaceElement extends UmbElementMixin(LitElement) {
  // @ts-ignore
  #workspaceContext = new TimeWorkspaceContext(this);

  render() {
    return html`
      <umb-workspace-editor
        headline="Time"
        alias=${TIME_WORKSPACE_ALIAS}
        .enforceNoFooter=${true}
      >
      </umb-workspace-editor>
    `;
  }
}

export default TimeWorkspaceElement;
