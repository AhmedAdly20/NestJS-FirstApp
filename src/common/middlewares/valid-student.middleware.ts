import { students } from './../../db';
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('This Middleware Called');
    const sutdentId = req.params.studentId;
    const studentExsists = students.some(student => student.id === sutdentId);
    if(!studentExsists) {
      throw new HttpException("Sudent Not Found", 400);
    }
    next();
  }
}
