import { StudentsService } from './../students/students.service';
import { TeacherStudentsController } from './../teachers/students.controller';
import { TeachersController } from './../teachers/teachers.controller';
import { Module } from '@nestjs/common';
import { StudentsController } from 'src/students/students.controller';
import { TeachersService } from 'src/teachers/teachers.service';

@Module({
  imports: [],
  controllers: [
    StudentsController,
    TeachersController,
    TeacherStudentsController,
  ],
  providers: [
    StudentsService,
    TeachersService,
  ],
})
export class AppModule {}
