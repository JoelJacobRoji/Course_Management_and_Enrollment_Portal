import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment';
import { NavbarComponent } from "../../shared/navbar/navbar";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './course-details.html',
  styleUrls: ['./course-details.css']
})
export class CourseDetailsComponent implements OnInit {

  course: any;
  isEnrolled = false;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourses().subscribe(courses => {
      this.course = courses.find(c => c.id === id);
      this.isEnrolled = false;
    });
  }

  enroll() {
  this.enrollmentService.enroll(this.course);
  this.isEnrolled = true;
  alert('You have successfully enrolled in this course');
}

unenroll() {
  const confirmUnenroll = confirm('You have unenrolled. Do you confirm?');
  if (confirmUnenroll) {
    this.enrollmentService.unenroll(this.course.id);
    this.isEnrolled = false;
  }
}


}
