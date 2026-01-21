import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { EnrollmentService } from './enrollment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'assets/data/courses.json';


  constructor(
    private http: HttpClient,
    private enrollment: EnrollmentService
  ) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return new Observable(observer => {
      this.getCourses().subscribe(courses => {
        observer.next(courses.find(c => c.id === id));
        observer.complete();
      });
    });
  }

  getEnrollmentCount(courseId: number): number {
    return this.enrollment.getEnrollmentCount(courseId);
  }
}
