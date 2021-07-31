/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put,  } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    @Get()
    getStudents(){
        return "Get All Students";
    }

    @Get('/:studentId')
    getStudentById(){
        return 'By ID';
    }

    @Post()
    createStudent(){
        return 'created';
    }

    @Put('/:studentId')
    updateStudent(){
        return 'updated';
    }
}