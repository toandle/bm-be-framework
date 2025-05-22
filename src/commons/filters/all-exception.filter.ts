import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ApplicationException, ErrorCode } from '../exceptions';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private logger = new Logger(AllExceptionsFilter.name);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(exception: Error, _host: ArgumentsHost) {
        let errorResponse: any = {
            code: ErrorCode.INTERNAL_SERVER_ERROR,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
            errors: [],
        };

        const error = (exception as any)?.error;

        // ApplicationException from other microservices
        if (exception instanceof RpcException) {
            const err = exception.getError();
            if (typeof err === 'object' && err !== null) {
                errorResponse = { ...errorResponse, ...err };
            } else {
                errorResponse.message = String(err);
            }
            // ApplicationException throw from other microservices
        } else if (error && typeof error === 'object' && error.code) {
            errorResponse = {
                message: error.message,
                code: error.code,
                statusCode: error.statusCode,
                errors: error.errors ? error.errors : [],
            };
            // Class validator
        } else if (exception instanceof BadRequestException) {
            const response = exception.getResponse();
            errorResponse = {
                message: 'Validation failed',
                code: ErrorCode.VALIDATION,
                errors: Array.isArray((response as any).message) ? (response as any).message : [response],
                statusCode: HttpStatus.BAD_REQUEST,
            };
            // Other exceptions
        } else {
            errorResponse.message = exception.message;
        }

        this.logger.error('Error: ', errorResponse);

        throw new ApplicationException({ success: false, ...errorResponse });
    }
}
