import { IsOptional, IsString } from 'class-validator';

export class AuditContextDto {
    @IsOptional()
    @IsString()
    userId?: string;

    @IsOptional()
    @IsString()
    businessId?: string;

    @IsOptional()
    @IsString()
    role?: string;

    @IsOptional()
    @IsString()
    ip?: string;

    @IsOptional()
    @IsString()
    userAgent?: string;

    @IsOptional()
    @IsString()
    deviceId?: string;

    @IsOptional()
    @IsString()
    url?: string;

    @IsOptional()
    @IsString()
    method?: string;
}
