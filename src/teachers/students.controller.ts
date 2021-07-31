import { Controller, Get, Param, Put } from "@nestjs/common";

@Controller("teachers/:teacherId/students")
export class TeacherStudentsController {
  @Get()
  getStudents(@Param('teacherId') teacherId:string) {
    return `Teacher with id ${teacherId}  students`;
  }

  @Put("/:studentId")
  updateStudentTeacher(
    @Param('teacherId') teacherId:string,
    @Param('studentId') studentId:string
  ) {
    return `Update Student with id ${studentId} to teacher with id ${teacherId}`;
  }
}
