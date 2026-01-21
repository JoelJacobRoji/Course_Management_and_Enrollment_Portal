import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent {

  beginnerCourses: Course[] = [];
  mediumCourses: Course[] = [];
  hardCourses: Course[] = [];

  constructor(private courseService: CourseService) {
    this.courseService.getCourses().subscribe(courses => {
      this.beginnerCourses = courses.filter(c => c.level === 'beginner');
      this.mediumCourses = courses.filter(c => c.level === 'medium');
      this.hardCourses = courses.filter(c => c.level === 'hard');
      console.log('CoursesComponent loaded');
    });
  }

  getCount(courseId: number): number {
    return this.courseService.getEnrollmentCount(courseId);
  }
}
