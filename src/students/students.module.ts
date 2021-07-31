import { ValidStudentMiddleware } from './../common/middlewares/valid-student.middleware';
import { StudentsService } from './students.service';
import { StudentsController } from 'src/students/students.controller';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

@Module({
    controllers: [StudentsController],
    providers: [StudentsService],
    exports: [StudentsService]
})
export class StudentsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidStudentMiddleware).forRoutes(
            {
            path: 'students/:studentId',
            method: RequestMethod.GET,
            },
            {
            path: 'students/:studentId',
            method: RequestMethod.PUT,
            },
        );
    }
}
