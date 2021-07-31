import { CreateStudentDto, UpdateStudentDto, FindStudentsResponseDto } from './dto/students.dto';
import { Body, Controller, Get, Param, Post, Put,  } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    @Get()
    getStudents(): FindStudentsResponseDto[] {
        return "Get All Students";
    }


    @Get('/:studentId')
    getStudentById( @Param('studentId') studentId: string ): FindStudentsResponseDto
    {
        return `Student Id is : ${studentId}`;
    }


    @Post()
    createStudent(@Body() body: CreateStudentDto): CreateStudentDto 
    {
        return `Create student ${JSON.stringify(body)}`
    }


    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDto
    ) : UpdateStudentDto
    {
        return `Update Student with id : ${studentId}
            with data ${JSON.stringify(body)}
        `;
    }
}