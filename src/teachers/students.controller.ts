import { FindStudentsResponseDto, StudentResponseDto } from './../students/dto/students.dto';
import { Controller, Get, Param, ParseUUIDPipe, Put } from "@nestjs/common";
import { StudentsService } from 'src/students/students.service';

@Controller("teachers/:teacherId/students")
export class TeacherStudentsController {

  constructor(private _studentService: StudentsService) {}

  @Get()
  getStudents(@Param('teacherId', new ParseUUIDPipe()) teacherId:string): FindStudentsResponseDto[] {
    return this._studentService.getStudentsByTeacherId(teacherId);
  }

  @Put("/:studentId")
  updateStudentTeacher(
    @Param('teacherId',  new ParseUUIDPipe()) teacherId:string,
    @Param('studentId', new ParseUUIDPipe()) studentId:string
  ) : StudentResponseDto  
  {
    return this._studentService.updateStudentTeacher(teacherId, studentId);
  }
}
