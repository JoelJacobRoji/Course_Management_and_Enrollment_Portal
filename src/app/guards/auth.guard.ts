import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

export const authGuard: CanActivateFn = () => {
  const studentService = inject(StudentService);
  const router = inject(Router);

  if (studentService.isRegistered()) {
    return true;
  }

  router.navigate(['/register']);
  return false;
};
