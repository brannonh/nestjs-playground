import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from '@nestjs/common';
import { CreatePenDto } from './dto/pens.dto';
import { PensService } from './pens.service';
import { Pen } from './interfaces/pen.interface';
import { PlaygroundExceptionFilter } from 'src/filters/playground-exception.filter';

@Controller('pens')
@UseFilters(PlaygroundExceptionFilter)
export class PensController {
  constructor(private pensService: PensService) {}

  @Post()
  async create(@Body() createPenDto: CreatePenDto): Promise<string> {
    return 'This action adds a new pen.';
  }

  @Get()
  async findAll(): Promise<string> {
    return 'This action returns all pens.';
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    return 'This action returns a single pen.';
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePenDto: CreatePenDto): Promise<string> {
    return 'This action updates a pen.';
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return 'This action removes a pen.';
  }
}
