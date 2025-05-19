export declare class BaseResponsePayload<T> {
    errorCode?: string;
    data?: T;
    constructor(data: T, errorCode: string);
}
