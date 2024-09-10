import { IsString } from "class-validator";

export class DiscussGptDto {
    @IsString()
    prompt: string;

    lang: "English"
};