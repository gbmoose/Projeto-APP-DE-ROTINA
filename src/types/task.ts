export type TaskCategory = 'Trabalho' | 'Estudos' | 'Treino' | 'Pessoal';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  category: TaskCategory;
  priority: TaskPriority;
  time?: string;
  durationMinutes?: number;
  completed: boolean;
}

export interface Habit {
  id: string;
  title: string;
  emoji: string;
  streak: number;
  week: boolean[];
}
