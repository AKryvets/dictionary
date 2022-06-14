import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Dictionary } from "./dictionary.schema";
import { CreateDictionaryDto } from "../dto/create-dictionary.dto";
import { UpdateDictionaryDto } from "../validation/update-dictionary.input";

@Injectable()
export class DictionaryRepository {
  constructor(
    @Inject("DICTIONARY_MODEL") private dictionaryModel: Model<Dictionary>
  ) {}

  async findOne(_id: string): Promise<Dictionary> {
    return this.dictionaryModel.findOne({ _id }).populate("author");
  }

  async createTask(createTaskModel: CreateDictionaryDto): Promise<void> {
    const newTask = new this.dictionaryModel(createTaskModel);

    await newTask.save();
  }

  async updateById(
    _id: string,
    updateModel: UpdateDictionaryDto
  ): Promise<void> {
    await this.dictionaryModel.updateOne({ _id }, { $set: updateModel });
  }

  async getAll(filterParams = {}): Promise<Dictionary[]> {
    return this.dictionaryModel.find(filterParams).populate("author");
  }

  async deleteOne(_id: string): Promise<Dictionary> {
    return this.dictionaryModel.findOneAndDelete({ _id });
  }
}
