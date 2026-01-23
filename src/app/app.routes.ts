import { Routes } from '@angular/router';
import { StudentRegisterComponent } from './pages/student-register/student-register';

export const routes: Routes = [

  {
    path: '',
    component: StudentRegisterComponent
  },

  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses/courses')
        .then(m => m.CoursesComponent)
  },

  {
    path: 'course-details/:id',
    loadComponent: () =>
      import('./pages/course-details/course-details')
        .then(m => m.CourseDetailsComponent)
  },

  {
    path: 'my-courses',
    loadComponent: () =>
      import('./pages/my-courses/my-courses')
        .then(m => m.MyCoursesComponent)
  }

];
