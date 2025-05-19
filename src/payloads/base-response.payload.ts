export class BaseResponsePayload<T> {
    errorCode?: string;
    data?: T;

    constructor(data: T, errorCode: string) {
        this.data = data;
        this.errorCode = errorCode;
    }
}
