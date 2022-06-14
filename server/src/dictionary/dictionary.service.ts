import { Injectable } from "@nestjs/common";
import { DictionaryRepository } from "./database/dictionary.repository";
import { CreateDictionaryDto } from "./dto/create-dictionary.dto";
import { Dictionary } from "./database/dictionary.schema";
import { UpdateDictionaryDto } from "./validation/update-dictionary.input";
import { GetDictionaryDto } from "./validation/get-dictionary.input";

@Injectable()
export class DictionaryService {
  constructor(private dictionaryRepository: DictionaryRepository) {}

  async findOne(id: string): Promise<Dictionary> {
    return await this.dictionaryRepository.findOne(id);
  }

  async create(dictionary: CreateDictionaryDto): Promise<boolean> {
    await this.dictionaryRepository.createTask(dictionary);

    return true;
  }

  async updateById(
    id: string,
    updateModel: UpdateDictionaryDto
  ): Promise<Dictionary> {
    await this.dictionaryRepository.updateById(id, updateModel);

    return this.findOne(id);
  }

  async deleteById(id: string): Promise<Dictionary> {
    return await this.dictionaryRepository.deleteOne(id);
  }

  async getDictionariesById({ id }: GetDictionaryDto): Promise<Dictionary[]> {
    return await this.dictionaryRepository.getAll({ creatorId: id });
  }

  async getDictionaries(): Promise<Dictionary[]> {
    return await this.dictionaryRepository.getAll();
  }

  async getAllWords(): Promise<Dictionary[]> {
    const dictionaries = await this.getDictionaries();

    return dictionaries.reduce(
      (acc, dictionary) => [...acc, ...dictionary.words],
      []
    );
  }
}
