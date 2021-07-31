import { StudentsService } from './students.service';
import { CreateStudentDto, UpdateStudentDto, FindStudentsResponseDto } from './dto/students.dto';
import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put,  } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    constructor(private _studentService: StudentsService) {}

    @Get()
    getStudents(): FindStudentsResponseDto[] {
        return this._studentService.getStudents();
    }


    @Get('/:studentId')
    getStudentById( @Param('studentId', new ParseUUIDPipe()) studentId: string ): FindStudentsResponseDto
    {
        return this._studentService.getStudentById(studentId);
    }


    @Post()
    createStudent(@Body() body: CreateStudentDto): CreateStudentDto 
    {
        return this._studentService.createStudent(body);
    }


    @Put('/:studentId')
    updateStudent(
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDto
    ) : UpdateStudentDto
    {
        return this._studentService.updateStudent(body, studentId);
    }
}