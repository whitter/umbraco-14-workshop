import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerHostElement } from "@umbraco-cms/backoffice/controller-api";
import {
  UMB_WORKSPACE_CONTEXT,
  type UmbWorkspaceContextInterface,
} from "@umbraco-cms/backoffice/workspace";
import { TIME_WORKSPACE_ENTITY_TYPE } from "../constants";

export class TimeWorkspaceContext
  extends UmbControllerBase
  implements UmbWorkspaceContextInterface
{
  public readonly workspaceAlias: string = "time.workspace";

  constructor(host: UmbControllerHostElement) {
    super(host);
    this.provideContext(UMB_WORKSPACE_CONTEXT, this);
    this.provideContext(TIME_WORKSPACE_CONTEXT, this);
  }

  getEntityType(): string {
    return TIME_WORKSPACE_ENTITY_TYPE;
  }

  getUnique(): string | undefined {
    return undefined;
  }
}

export default TimeWorkspaceContext;

export const TIME_WORKSPACE_CONTEXT = new UmbContextToken<TimeWorkspaceContext>(
  TimeWorkspaceContext.name
);
