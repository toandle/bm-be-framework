import { RpcException } from '@nestjs/microservices';

export class ApplicationException extends RpcException {
    constructor(code: string, message: string, errors: string[]) {
        super({
            code: code,
            message: message,
            errors,
        });
    }
}
