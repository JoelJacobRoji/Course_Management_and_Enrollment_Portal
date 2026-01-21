import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './student-register.html',
  styleUrls: ['./student-register.css']
})
export class StudentRegisterComponent {

  studentForm!: FormGroup;   // declared, not initialized here

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    // ✅ SAFE PLACE to use fb
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    if (this.studentForm.invalid) return;

    const student: Student = {
      id: Date.now(),
      name: this.studentForm.value.name!,
      email: this.studentForm.value.email!,
      enrolledCourseIds: []
    };

    this.studentService.register(student);
    this.router.navigate(['/courses']);
  }
}