import {
  UmbWorkspaceAction,
  UmbWorkspaceActionArgs,
  UmbWorkspaceActionBase,
} from "@umbraco-cms/backoffice/workspace";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import {
  UMB_NOTIFICATION_CONTEXT,
  UmbNotificationContext,
} from "@umbraco-cms/backoffice/notification";

export class TimeAction extends UmbWorkspaceActionBase implements UmbWorkspaceAction {
  #notificationContext?: UmbNotificationContext;

  constructor(
    host: UmbControllerHost,
    args: UmbWorkspaceActionArgs<never>
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

export const api = TimeAction;