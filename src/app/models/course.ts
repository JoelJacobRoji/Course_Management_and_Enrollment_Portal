export interface Course {
  id: number;
  name: string;
  fee: number;
  credits: number;
  instructor: string;
  description: string;
  level: 'Beginner' | 'Medium' | 'Hard';
}
