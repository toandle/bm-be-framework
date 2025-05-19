import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { AuditContextDto } from './audit-context.dto';
import { Type } from 'class-transformer';
export class RequestDto {
    @IsOptional()
    @IsString()
    requestId?: string;

    @IsOptional()
    @Type(() => AuditContextDto)
    @ValidateNested()
    auditContext?: AuditContextDto;
}
