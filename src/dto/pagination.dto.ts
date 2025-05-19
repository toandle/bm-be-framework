import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

import { RequestDto } from './request.dto';

export class PaginationDto extends RequestDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: 'Page number must be an integer' })
    readonly pageNumber?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: 'Limit must be an integer' })
    readonly pageSize?: number;

    @IsOptional()
    @IsString({ message: 'SortBy must be a string' })
    readonly sortBy?: string;

    @IsOptional()
    @IsIn(['ASC', 'DESC'], { message: 'SortOrder must be either ASC or DESC' })
    readonly sortOrder?: 'ASC' | 'DESC';
}
