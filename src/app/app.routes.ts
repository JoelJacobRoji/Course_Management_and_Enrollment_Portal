import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses';
import { MyCoursesComponent } from './pages/my-courses/my-courses';
import { StudentRegisterComponent } from './pages/student-register/student-register';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },

  { path: 'register', component: StudentRegisterComponent },

  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [authGuard]
  },

  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./pages/course-details/course-details')
        .then(m => m.CourseDetailsComponent),
    canActivate: [authGuard]
  },

  {
    path: 'my-courses',
    component: MyCoursesComponent,
    canActivate: [authGuard]
  },

  { path: '**', redirectTo: 'register' }
];
