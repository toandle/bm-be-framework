import { RpcException } from '@nestjs/microservices';
export declare class ApplicationException extends RpcException {
    constructor(error: {
        code: string;
        message: string;
        statusCode: number;
        errors: string[];
    });
}
