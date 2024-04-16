import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import {
  LitElement,
  css,
  customElement,
  html,
} from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT } from '@umbraco-cms/backoffice/modal';
import { TIME_HEADER_MODAL_ALIAS } from "../constants";

@customElement("time-header-app")
export class TimeHeaderAppElement extends UmbElementMixin(LitElement) {
  #onTime() {
    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (manager) => {
      manager.open(this, TIME_HEADER_MODAL_ALIAS, {});
    });
  }

  render() {
    return html`
      <uui-button @click=${this.#onTime} look="primary" label="time" compact>
        <uui-icon name="icon-alarm-clock"></uui-icon>
      </uui-button>
    `;
  }

  static styles = css`
    uui-button {
      font-size: 18pt;
      --uui-button-background-color: transparent;
    }
  `;
}

export default TimeHeaderAppElement;
