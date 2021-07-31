import { StudentsService } from './students.service';
import { StudentsController } from 'src/students/students.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers: [StudentsController],
    providers: [StudentsService],
    exports: [StudentsService]
})
export class StudentsModule {}
