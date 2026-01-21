export interface Course {
  id: number;
  name: string;
  level: 'beginner' | 'medium' | 'hard';
  fee: number;
  duration: string;
  instructor: string;
  credits: number;
  description: string;
  facultyBio: string;
}
