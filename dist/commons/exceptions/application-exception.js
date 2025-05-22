"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationException = void 0;
const microservices_1 = require("@nestjs/microservices");
class ApplicationException extends microservices_1.RpcException {
    constructor(error) {
        super({
            success: false,
            ...error,
        });
    }
}
exports.ApplicationException = ApplicationException;
//# sourceMappingURL=application-exception.js.map