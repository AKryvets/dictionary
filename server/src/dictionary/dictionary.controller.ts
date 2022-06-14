import {
  Controller,
  Request,
  UseGuards,
  Post,
  Body,
  Put,
  Param,
  Get,
  Delete,
} from "@nestjs/common";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { DictionaryService } from "./dictionary.service";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JoiValidationPipe } from "../common/pipes/validation.pipe";
import { GetDictionaryDto } from "./validation/get-dictionary.input";
import { CreateDictionaryDto } from "./dto/create-dictionary.dto";
import { CreateDictionarySchema } from "./validation/create-dictionary.input";
import {
  UpdateDictionaryDto,
  UpdateDictionarySchema,
} from "./validation/update-dictionary.input";

@ApiTags("dictionary")
@Controller("dictionary")
export class UserController {
  constructor(private dictionaryService: DictionaryService) {}

  @ApiOperation({ summary: "Get all words" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get("words")
  getWords() {
    return this.dictionaryService.getAllWords();
  }

  @ApiOperation({ summary: "Get dictionary" })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(":id")
  getDictionary(@Param() { id }: GetDictionaryDto) {
    return this.dictionaryService.findOne(id);
  }

  @ApiOperation({ summary: "Create dictionary" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post("")
  createDictionary(
    @Request() req,
    @Body(new JoiValidationPipe(CreateDictionarySchema))
    { title }: CreateDictionaryDto
  ) {
    return this.dictionaryService.create({ title, creatorId: req.user._id });
  }

  @ApiOperation({ summary: "Update dictionary" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(":id")
  updateDictionary(
    @Param() { id }: GetDictionaryDto,
    @Body(new JoiValidationPipe(UpdateDictionarySchema))
    body: UpdateDictionaryDto
  ) {
    return this.dictionaryService.updateById(id, body);
  }

  @ApiOperation({ summary: "Update dictionaries by user" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get("my")
  getDictionaryByUser(@Request() req) {
    return this.dictionaryService.getDictionariesById({ id: req.user._id });
  }

  @ApiOperation({ summary: "Get all dictionaries" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get("")
  getTasks() {
    return this.dictionaryService.getDictionaries();
  }

  @ApiOperation({ summary: "Delete task" })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  deleteDictionary(@Param() { id }: GetDictionaryDto) {
    return this.dictionaryService.deleteById(id);
  }
}
