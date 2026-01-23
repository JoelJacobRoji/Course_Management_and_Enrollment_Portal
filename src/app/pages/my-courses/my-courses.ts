import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { EnrollmentService } from '../../services/enrollment';
import { NavbarComponent } from "../../shared/navbar/navbar";

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './my-courses.html',
  styleUrls: ['./my-courses.css']
})
export class MyCoursesComponent implements OnInit {

  student: any;
  enrolledCourses: any[] = [];

  constructor(
    private studentService: StudentService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.student = this.studentService.getStudent();
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }

  unenroll(courseId: number) {
    this.enrollmentService.unenroll(courseId);
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}
