import { Controller, Get, Put } from "@nestjs/common";

@Controller("teachers/:teacherId/students")
export class TeacherStudentsController {
  @Get()
  getStudents() {
    return "Teacher students";
  }

  @Put("/:studentId")
  updateStudentTeacher() {
    return "updated";
  }
}
