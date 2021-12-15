import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, SetMetadata, UseFilters, UseGuards, UsePipes } from '@nestjs/common';
import { CreatePenDto } from './dto/pens.dto';
import { PensService } from './pens.service';
import { PlaygroundExceptionFilter } from 'src/filters/playground-exception.filter';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { CreatePenSchema } from './schemas/create-pen.schema';
import { DtoValidationPipe } from 'src/pipes/dto-validation.pipe';
import { RoleGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('pens')
@UseGuards(RoleGuard)
@UseFilters(PlaygroundExceptionFilter)
export class PensController {
  constructor(private pensService: PensService) {}

  @Post()
  @Roles('admin')
  // @UsePipes(new JoiValidationPipe(CreatePenSchema))
  async create(@Body(new DtoValidationPipe()) createPenDto: CreatePenDto): Promise<string> {
    return 'This action adds a new pen.';
  }

  @Get()
  async findAll(): Promise<string> {
    return 'This action returns all pens.';
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return 'This action returns a single pen.';
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePenDto: CreatePenDto): Promise<string> {
    return 'This action updates a pen.';
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return 'This action removes a pen.';
  }
}
