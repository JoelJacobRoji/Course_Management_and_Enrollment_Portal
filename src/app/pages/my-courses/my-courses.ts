import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-courses.html'
})
export class MyCoursesComponent {

  allCourses = [
    { id: 1, name: 'HTML Basics' },
    { id: 2, name: 'CSS Basics' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'System Design' },
    { id: 6, name: 'Cloud Architecture' }
  ];

  constructor(private enrollment: EnrollmentService) {}

  myCourses() {
    const ids = this.enrollment.getMyCourses();
    return this.allCourses.filter(c => ids.includes(c.id));
  }

  unenroll(courseId: number) {
    this.enrollment.unenroll(courseId);
  }
}
