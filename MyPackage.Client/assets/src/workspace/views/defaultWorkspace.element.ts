import {
  LitElement,
  customElement,
  html,
} from "@umbraco-cms/backoffice/external/lit";

@customElement("time-workspace-default-view")
export class TimeDefaultWorkspaceElement extends LitElement {
  render() {
    return html`
      <umb-body-layout header-transparent header-fit-height>
        <uui-box headline="my workspace content">
          <p>Some content goes here</p>
        </uui-box>
      </umb-body-layout>
    `;
  }
}

export default TimeDefaultWorkspaceElement;
