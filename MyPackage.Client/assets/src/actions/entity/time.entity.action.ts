import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import {
  UmbEntityActionArgs,
  UmbEntityActionBase,
} from "@umbraco-cms/backoffice/entity-action";
import {
  UMB_NOTIFICATION_CONTEXT,
  UmbNotificationContext,
} from "@umbraco-cms/backoffice/notification";

export class TimeEntityAction extends UmbEntityActionBase<never> {
  #notificationContext?: UmbNotificationContext;

  constructor(
    host: UmbControllerHost,
    args: UmbEntityActionArgs<never>
  ) {
    super(host, args);

    this.consumeContext(UMB_NOTIFICATION_CONTEXT, (instance) => {
      this.#notificationContext = instance;
    });
  }

  async execute() {
    this.#notificationContext?.peek("warning", {
      data: {
        headline: "A thing has happened !",
        message: "What that thing is? only time will tell.",
      },
    });
  }
}

export { TimeEntityAction as api };
