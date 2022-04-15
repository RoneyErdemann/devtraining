import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
//import { response } from 'express';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  //findOne(@Param() params) {
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
    //return `Curso #${id}`;
    //return `Curso #${params.id}`;
  }

  @Post()
  //@HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
    //return `Atualização do Curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
    //return `Exclusão do ccCurso #${id}`;
  }
}
