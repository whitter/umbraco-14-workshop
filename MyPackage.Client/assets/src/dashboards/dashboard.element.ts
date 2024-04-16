import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from "@umbraco-cms/backoffice/external/lit";
import TimeManagementContext, { TIME_MANAGEMENT_CONTEXT_TOKEN } from "../context/time.context";

@customElement("mypackage-dashboard")
export class MyPackageDashboard extends UmbElementMixin(LitElement) {

  #timeContext? : TimeManagementContext;

  @property()
  title = "MyPackage dashboard";

  @property({type: String})
  time?: string;

  @property({type: String})
  date?: string;

  constructor() {
    super();

    this.consumeContext(TIME_MANAGEMENT_CONTEXT_TOKEN, (_instance) => {
      this.#timeContext = _instance;

      this.observe(_instance.time, (_time) => {
        this.time = _time;
      });

      this.observe(_instance.date, (_date) => {
        this.date = _date;
      });
    });
  }

  async getTime() {
    await this.#timeContext?.getTime();     
  }

  async getDate() {
    await this.#timeContext?.getDate();
  }

  render() {
    return html`
      <uui-box headline="${this.title}">
        <div>
          <uui-button @click=${this.getTime} look="primary" color="positive" label="get time"></uui-button>
          <h2>${this.time}</h2>
        </div>

        <div>
          <uui-button @click=${this.getDate} look="primary" color="default" label="get date" ></uui-button>
          <h2>${this.date}</h2>
        </div>
      </uui-box>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
  `;
}

export default MyPackageDashboard;

declare global {
  interface HtmlElementTagNameMap {
    "MyPackage-dashboard": MyPackageDashboard;
  }
}
