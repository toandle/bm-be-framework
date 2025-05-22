import { RpcException } from '@nestjs/microservices';
export declare class ApplicationException extends RpcException {
    constructor(code: string, message: string, errors: string[]);
}
