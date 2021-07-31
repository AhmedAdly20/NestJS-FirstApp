import { TeachersService } from 'src/teachers/teachers.service';
import { FindTeacherResponseDto } from './dto/teachers.dto';
import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers')
export class TeachersController {

  constructor(private _teacherService: TeachersService) { }

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this._teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId:string): FindTeacherResponseDto {
    return this._teacherService.getTeacherById(teacherId);
  }

}
