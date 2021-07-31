import { TeacherStudentsController } from './../teachers/students.controller';
import { TeachersController } from './../teachers/teachers.controller';
import { Module } from '@nestjs/common';
import { StudentsController } from 'src/students/students.controller';

@Module({
  imports: [],
  controllers: [
    StudentsController,
    TeachersController,
    TeacherStudentsController,
  ],
})
export class AppModule {}
