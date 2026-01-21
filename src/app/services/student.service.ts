import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsKey = 'students';
  private activeStudentKey = 'activeStudent';

  register(student: Student): void {
    const students: Student[] =
      JSON.parse(localStorage.getItem(this.studentsKey) || '[]');

    students.push(student);

    localStorage.setItem(this.studentsKey, JSON.stringify(students));
    localStorage.setItem(this.activeStudentKey, JSON.stringify(student));
  }

  getCurrentStudent(): Student | null {
    return JSON.parse(localStorage.getItem(this.activeStudentKey) || 'null');
  }

  getActiveStudentId(): number {
    const student = this.getCurrentStudent();
    if (!student) {
      throw new Error('No active student');
    }
    return student.id;
  }

  isRegistered(): boolean {
    return !!localStorage.getItem(this.activeStudentKey);
  }

  logout(): void {
  localStorage.removeItem('activeStudent');
  
}

}
