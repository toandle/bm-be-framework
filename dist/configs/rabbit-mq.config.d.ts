import { RmqOptions } from '@nestjs/microservices';
export declare const rabbitMqConfig: (payload: Partial<RmqOptions["options"]>) => RmqOptions;
