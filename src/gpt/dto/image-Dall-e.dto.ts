import { IsString } from 'class-validator';

export class ImageDallEDto {
    @IsString()
    prompt: string;
}