import { FindTeacherResponseDto } from './dto/teachers.dto';
import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers')
export class TeachersController {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'all';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId:string): FindTeacherResponseDto {
    return `Teacher with id  ${teacherId}`;
  }

}
