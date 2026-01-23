import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {

  private STORAGE_KEY = 'enrolled_courses';

  getEnrolledCourses(): any[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  enroll(course: any) {
    const courses = this.getEnrolledCourses();

    if (!courses.find(c => c.id === course.id)) {
      courses.push(course);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
    }
  }

  unenroll(courseId: number) {
    const courses = this.getEnrolledCourses()
      .filter(c => c.id !== courseId);

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
  }

  isEnrolled(courseId: number): boolean {
    return this.getEnrolledCourses()
      .some(c => c.id === courseId);
  }
}
