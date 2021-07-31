import { StudentsModule } from './../students/students.module';
import { Module } from '@nestjs/common';
import { TeachersModule } from 'src/teachers/teachers.module';

@Module({
  imports: [TeachersModule, StudentsModule],
})
export class AppModule {}
