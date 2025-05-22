import { RpcException } from '@nestjs/microservices';

export class ApplicationException extends RpcException {
    constructor(error: { code: string; message: string; errors: string[] }) {
        super({
            code: error.code,
            message: error.message,
            errors: error.errors,
        });
    }
}
