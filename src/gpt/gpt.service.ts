import { Injectable } from '@nestjs/common';
import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';
import OpenAI from "openai";
import { translateUseCase } from './usecases/translate.use-case';
import { prosConDiscussionUseCase } from './usecases/discussion.use-case';
import { generateImageUseCase } from './usecases/imageDalle.use-case';

@Injectable()
export class GptService {
  private openai= new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  async translate({prompt,lang}) {
    return await translateUseCase(this.openai,{prompt,lang});
  }

  async prosConsDiscussion({prompt}) {
    return await prosConDiscussionUseCase(this.openai,{prompt});
  }

  async image({prompt}) {
    return await generateImageUseCase(this.openai,{prompt});
  }


  create(createGptDto: CreateGptDto) {
    return 'This action adds a new gpt';
  }

  findAll() {
    return `This action returns all gpt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gpt`;
  }

  update(id: number, updateGptDto: UpdateGptDto) {
    return `This action updates a #${id} gpt`;
  }

  remove(id: number) {
    return `This action removes a #${id} gpt`;
  }
}
