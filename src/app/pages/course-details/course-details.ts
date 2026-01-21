import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './course-details.html'
})
export class CourseDetailsComponent {

  course: any;

  allCourses = [
    { id: 1, name: 'HTML Basics', description: 'HTML fundamentals' },
    { id: 2, name: 'CSS Basics', description: 'CSS styling' },
    { id: 3, name: 'JavaScript', description: 'JS programming' },
    { id: 4, name: 'Angular', description: 'Angular framework' },
    { id: 5, name: 'System Design', description: 'Design systems' },
    { id: 6, name: 'Cloud Architecture', description: 'Cloud concepts' }
  ];

  constructor(
    private route: ActivatedRoute,
    private enrollment: EnrollmentService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.allCourses.find(c => c.id === id);
  }

  enroll() {
  this.enrollment.enroll(this.course.id);
  alert('Enrolled successfully');
}


  isEnrolled() {
    return this.enrollment.isEnrolled(this.course.id);
  }
}
