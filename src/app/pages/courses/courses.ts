import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { NavbarComponent } from "../../shared/navbar/navbar";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent implements OnInit {

  beginnerCourses: Course[] = [];
  mediumCourses: Course[] = [];
  hardCourses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.beginnerCourses = courses.filter(c => c.level === 'Beginner');
      this.mediumCourses = courses.filter(c => c.level === 'Medium');
      this.hardCourses = courses.filter(c => c.level === 'Hard');
    });
  }
}
