/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put,  } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    @Get()
    getStudents() {
        return "Get All Students";
    }


    @Get('/:studentId')
    getStudentById( @Param('studentId') studentId: string ) 
    {
        return `Student Id is : ${studentId}`;
    }


    @Post()
    createStudent(@Body() body) 
    {
        return `Create student ${JSON.stringify(body)}`
    }


    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body
    ) 
    {
        return `Update Student with id : ${studentId}
            with data ${JSON.stringify(body)}
        `;
    }
}