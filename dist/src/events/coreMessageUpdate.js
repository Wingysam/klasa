"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@klasa/core");
class default_1 extends core_1.Event {
    constructor(store, directory, file) {
        super(store, directory, file, { event: 'messageUpdate' });
    }
    run(message, previous) {
        if (previous.content !== message.content)
            this.client.monitors.run(message);
    }
}
exports.default = default_1;
//# sourceMappingURL=coreMessageUpdate.js.map