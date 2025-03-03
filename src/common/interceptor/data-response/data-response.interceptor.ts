import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';

/**
 * DataResponseInterceptor is an interceptor that is responsible for
 * formatting the response data.
 * @implements {NestInterceptor}
 */
@Injectable()
export class DataResponseInterceptor implements NestInterceptor {
    /**
     * DataResponseInterceptor constructor.
     * @param {ConfigService} configService  The ConfigService service.
     */
    constructor(private readonly configService: ConfigService) {}

    /**
     * Intercepts the response data and formats it.
     * @param {ExecutionContext} context  The execution context.
     * @param {CallHandler} next  The call handler.
     * @returns {Observable<any>}  An observable containing the formatted data.
     */
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                if (data) {
                    return {
                        data: data,
                        apiVersion: this.configService.get(
                            'appConfig.apiVersion',
                        ),
                    };
                }
            }),
        );
    }
}
