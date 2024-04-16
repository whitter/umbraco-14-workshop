import {
  LitElement,
  customElement,
  html,
} from "@umbraco-cms/backoffice/external/lit";

@customElement("time-workspace-default-view")
export class TimeDefaultWorkspaceElement extends LitElement {
  render() {
    return html`
      <uui-box headline="my workspace content">
        <p>Some content goes here</p>
      </uui-box>
    `;
  }
}

export default TimeDefaultWorkspaceElement;
