import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class AllExceptionsFilter implements ExceptionFilter {
    private logger;
    catch(exception: Error, _host: ArgumentsHost): void;
}
