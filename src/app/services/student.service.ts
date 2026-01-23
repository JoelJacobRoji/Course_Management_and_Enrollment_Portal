import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentService {

  private STORAGE_KEY = 'student_profile';

  saveStudent(student: any) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(student));
  }

  getStudent() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  clearStudent() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
