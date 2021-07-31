import { StudentsModule } from './../students/students.module';
import { TeachersService } from 'src/teachers/teachers.service';
import { TeacherStudentsController } from './students.controller';
import { TeachersController } from './teachers.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [StudentsModule],
    controllers: [TeachersController, TeacherStudentsController],
    providers: [TeachersService],
})
export class TeachersModule {}
