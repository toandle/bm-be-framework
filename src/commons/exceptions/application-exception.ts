import { RpcException } from '@nestjs/microservices';

export class ApplicationException extends RpcException {
    constructor(error: { code: string; message: string; statusCode: number; errors: string[] }) {
        super({
            success: false,
            ...error,
        });
    }
}
