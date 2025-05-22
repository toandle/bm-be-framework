import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class AllExceptionsFilter implements ExceptionFilter {
    private logger;
    catch(exception: unknown, _host: ArgumentsHost): void;
}
