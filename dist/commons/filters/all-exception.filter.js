"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    constructor() {
        this.logger = new common_1.Logger(AllExceptionsFilter_1.name);
    }
    catch(exception, _host) {
        let errorResponse = {
            message: 'Internal error',
            code: 'INTERNAL_ERROR',
        };
        if (exception instanceof microservices_1.RpcException) {
            const err = exception.getError();
            if (typeof err === 'object' && err !== null) {
                errorResponse = { ...errorResponse, ...err };
            }
            else {
                errorResponse.message = String(err);
            }
        }
        else if (exception instanceof common_1.BadRequestException) {
            const response = exception.getResponse();
            errorResponse = {
                message: 'Validation failed',
                code: 'VALIDATION_ERROR',
                errors: Array.isArray(response.message) ? response.message : [response],
            };
        }
        else if (exception instanceof common_1.HttpException) {
            errorResponse = {
                message: exception.message,
                code: 'HTTP_ERROR',
                statusCode: exception.getStatus(),
            };
        }
        else if (exception instanceof Error) {
            errorResponse.message = exception.message;
        }
        this.logger.log('Error: ', errorResponse);
        return (0, rxjs_1.throwError)(() => ({
            success: false,
            ...errorResponse,
        }));
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exception.filter.js.map