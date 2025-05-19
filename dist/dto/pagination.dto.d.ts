import { RequestDto } from './request.dto';
export declare class PaginationDto extends RequestDto {
    readonly pageNumber?: number;
    readonly pageSize?: number;
    readonly sortBy?: string;
    readonly sortOrder?: 'ASC' | 'DESC';
}
