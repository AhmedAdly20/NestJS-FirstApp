import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers')
export class TeachersController {
  @Get()
  getTeachers() {
    return 'all';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'Teacher';
  }

}
