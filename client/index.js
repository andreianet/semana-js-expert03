import Events from 'events';
import TerminalController from "./src/terminalController.js";

const componentEvent = new Events();

const controller = new TerminalController();
await controller.initializeTable(componentEvent);