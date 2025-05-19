import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const args = context.getArgs();
        const { requestId } = args[0];

        Logger.debug(`${context.getClass().name}.${context.getHandler().name}()`, { requestId });
        return next.handle();
    }
}
