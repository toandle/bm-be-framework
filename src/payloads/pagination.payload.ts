import { PaginationDto } from '../dto/pagination.dto';

export interface IPaginationResponse<T> {
    items: T[];
    pageSize: number;
    pageNumber: number;
    totalItems: number;
    totalPages: number;
}

export class PaginationPayload {
    pageSize: number;
    pageNumber: number;
    totalItems: number;
    totalPages: number;

    constructor(pagination: PaginationDto, totalItems: number) {
        this.pageNumber = Number(pagination.pageNumber) || 1;
        this.pageSize = Number(pagination.pageSize) || 10;
        this.totalItems = totalItems;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    }
}
