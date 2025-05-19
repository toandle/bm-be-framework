import { IsNotEmpty, IsUUID } from 'class-validator';
import { RequestDto } from './request.dto';

export class IdDto extends RequestDto {
    @IsNotEmpty()
    @IsUUID('4')
    id: string;
}
