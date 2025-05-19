import { RmqOptions, Transport } from '@nestjs/microservices';

export const rabbitMqConfig = (payload: Partial<RmqOptions['options']>): RmqOptions => {
    if (typeof payload === 'object') {
        const { urls, persistent = false, prefetchCount = 0, noAck = true, queue, headers = {} } = payload;

        return {
            transport: Transport.RMQ,
            options: {
                urls,
                headers,
                persistent,
                noAck,
                prefetchCount,
                queue,
            },
        };
    } else {
        throw Error('Rabbit MQ configuration is not an object type.');
    }
};
