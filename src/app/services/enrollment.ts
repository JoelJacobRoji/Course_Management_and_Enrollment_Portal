import { Injectable } from '@angular/core';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private key = 'enrollments';

  constructor(private studentService: StudentService) {}

  private getData(): Record<number, number[]> {
    return JSON.parse(localStorage.getItem(this.key) || '{}');
  }

  private save(data: Record<number, number[]>): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  enroll(courseId: number): void {
    const studentId = this.studentService.getActiveStudentId();
    const data = this.getData();

    data[studentId] = data[studentId] || [];

    if (!data[studentId].includes(courseId)) {
      data[studentId].push(courseId);
      this.save(data);
    }
  }

  unenroll(courseId: number): void {
    const studentId = this.studentService.getActiveStudentId();
    const data = this.getData();

    data[studentId] = (data[studentId] || [])
      .filter(id => id !== courseId);

    this.save(data);
  }

  getMyCourses(): number[] {
    const studentId = this.studentService.getActiveStudentId();
    return this.getData()[studentId] || [];
  }

  isEnrolled(courseId: number): boolean {
    return this.getMyCourses().includes(courseId);
  }

  getEnrollmentCount(courseId: number): number {
    const data = this.getData();
    return Object.values(data)
      .filter(courses => courses.includes(courseId))
      .length;
  }
}
