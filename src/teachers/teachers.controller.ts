import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers')
export class TeachersController {
  @Get()
  getTeachers() {
    return 'all';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId:string) {
    return `Teacher with id  ${teacherId}`;
  }

}
