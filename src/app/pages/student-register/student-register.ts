import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-register.html',
  styleUrls: ['./student-register.css']
})
export class StudentRegisterComponent {

  student = {
    name: '',
    email: '',
    phone: '',
    department: '',
    class: '',
    registrationNo: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  submit(form: NgForm) {
    if (form.invalid) return;

    // 🔐 SAVE PERMANENTLY
    this.studentService.saveStudent(this.student);

    // ➡️ GO TO COURSES
    this.router.navigate(['/courses']);
  }
}
