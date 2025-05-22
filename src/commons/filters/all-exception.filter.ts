import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ErrorCode } from '../exceptions';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private logger = new Logger(AllExceptionsFilter.name);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(exception: unknown, _host: ArgumentsHost) {
        let errorResponse: any = {
            message: 'Internal error',
            code: ErrorCode.INTERNAL_SERVER_ERROR,
        };

        if (exception instanceof RpcException) {
            const err = exception.getError();
            if (typeof err === 'object' && err !== null) {
                errorResponse = { ...errorResponse, ...err };
            } else {
                errorResponse.message = String(err);
            }
        } else if (exception instanceof BadRequestException) {
            const response = exception.getResponse();
            errorResponse = {
                message: 'Validation failed',
                code: ErrorCode.VALIDATION,
                errors: Array.isArray((response as any).message) ? (response as any).message : [response],
            };
        } else if (exception instanceof HttpException) {
            errorResponse = {
                message: exception.message,
                code: ErrorCode.UNKNOWN,
                statusCode: exception.getStatus(),
            };
        } else if (exception instanceof Error) {
            errorResponse.message = exception.message;
        }

        this.logger.log('Error: ', errorResponse);

        throw new RpcException(errorResponse);
    }
}
