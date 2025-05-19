"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitMqConfig = void 0;
const microservices_1 = require("@nestjs/microservices");
const rabbitMqConfig = (payload) => {
    if (typeof payload === 'object') {
        const { urls, persistent = false, prefetchCount = 0, noAck = true, queue, headers = {} } = payload;
        return {
            transport: microservices_1.Transport.RMQ,
            options: {
                urls,
                headers,
                persistent,
                noAck,
                prefetchCount,
                queue,
            },
        };
    }
    else {
        throw Error('Rabbit MQ configuration is not an object type.');
    }
};
exports.rabbitMqConfig = rabbitMqConfig;
//# sourceMappingURL=rabbit-mq.config.js.map