import { teachers } from './../db';
import { Injectable } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teachers.dto';

@Injectable()
export class TeachersService {
    private _teachers = teachers;

    getTeachers(): FindTeacherResponseDto[] {
        return this._teachers
    }

    getTeacherById(id: string): FindTeacherResponseDto {
        return this._teachers.find(teacher => {
            return teacher.id === id
        })
    }
}
