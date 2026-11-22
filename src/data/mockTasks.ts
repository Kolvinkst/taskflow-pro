import type { Task } from '../types/task';

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Настроить окружение на Ubuntu',
    description: 'Установить Node.js, Vite и настроить строгий TypeScript',
    status: 'done',
    priority: 'high',
    createdAt: Date.now() - 86400000,
  },
  {
    id: '2',
    title: 'Разобраться с типами в TypeScript',
    status: 'in-progress',
    priority: 'medium',
    createdAt: Date.now() - 3600000,
  },
  {
    id: '3',
    title: 'Сверстать карточки задач в React',
    description: 'Использовать метод map для рендера списка',
    status: 'todo',
    priority: 'low',
    createdAt: Date.now(),
  },
];
