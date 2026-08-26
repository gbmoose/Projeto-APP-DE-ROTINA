import type { Habit, Task } from '../types/task';

export const initialTasks: Task[] = [
  { id: '1', title: 'Verificar chamados pendentes', category: 'Trabalho', priority: 'high', time: '08:00', durationMinutes: 30, completed: true },
  { id: '2', title: 'Estudar React Native', category: 'Estudos', priority: 'high', time: '19:00', durationMinutes: 45, completed: false },
  { id: '3', title: 'Corrida leve', category: 'Treino', priority: 'medium', time: '20:00', durationMinutes: 50, completed: false },
  { id: '4', title: 'Organizar o quarto', category: 'Pessoal', priority: 'low', completed: false },
];

export const habits: Habit[] = [
  { id: '1', title: 'Beber água', emoji: '💧', streak: 8, week: [true, true, true, false, false, false, false] },
  { id: '2', title: 'Ler 20 minutos', emoji: '📚', streak: 3, week: [true, false, true, false, false, false, false] },
  { id: '3', title: 'Alongamento', emoji: '🧘', streak: 5, week: [true, true, true, false, false, false, false] },
];
