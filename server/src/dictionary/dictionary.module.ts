import { Module } from "@nestjs/common";
import { DictionaryService } from "./dictionary.service";
import { UserController } from "./dictionary.controller";
import { DatabaseModule } from "../database/database.module";
import { dictionaryProviders } from "./database/dictionary.providers";
import { DictionaryRepository } from "./database/dictionary.repository";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [DictionaryService, DictionaryRepository, ...dictionaryProviders],
  exports: [DictionaryService, DictionaryRepository],
})
export class DictionaryModule {}
