import { customElement, html } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement } from "@umbraco-cms/backoffice/modal";

@customElement("time-header-modal")
export class TimeHeaderModalElement extends UmbModalBaseElement {
  #handleClose() {
    this.modalContext?.reject();
  }

  render() {
    return html`
      <uui-dialog-layout class="uui-text" headline="a modal dialog box">
        <p>Some modal things go here</p>

        <uui-button
          slot="actions"
          id="close"
          label="Close"
          look="primary"
          color="danger"
          @click="${this.#handleClose}"
          >Close</uui-button
        >
      </uui-dialog-layout>
    `;
  }
}

export default TimeHeaderModalElement;
