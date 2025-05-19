import { PaginationDto } from '../dto/pagination.dto';
export interface IPaginationResponse<T> {
    items: T[];
    pageSize: number;
    pageNumber: number;
    totalItems: number;
    totalPages: number;
}
export declare class PaginationPayload {
    pageSize: number;
    pageNumber: number;
    totalItems: number;
    totalPages: number;
    constructor(pagination: PaginationDto, totalItems: number);
}
