import { IsString } from "class-validator";

export class TranslateGptDto {
    @IsString()
    prompt: string;
    @IsString()
    lang: string;
}