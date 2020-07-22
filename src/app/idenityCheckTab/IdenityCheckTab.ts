import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/idenityCheckTab/index.html")
@PreventIframe("/idenityCheckTab/config.html")
@PreventIframe("/idenityCheckTab/remove.html")
export class IdenityCheckTab {
}
