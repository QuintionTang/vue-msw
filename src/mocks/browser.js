import { setupWorker } from "msw";
import { handlers, defaultHandlers } from "./handlers";

export const mocker = setupWorker(...handlers, ...defaultHandlers);
