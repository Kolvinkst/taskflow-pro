import { useState } from 'react';
import { initialTasks } from './data/mockTasks';
import { TaskCard } from './components/TaskCard';
import type { Task, TaskStatus } from './types/task';

export function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    const nextStatusMap: Record<TaskStatus, TaskStatus> = {
      'todo': 'in-progress',
      'in-progress': 'done',
      'done': 'todo',
    };

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: nextStatusMap[task.status] }
          : task
      )
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>TaskFlow Pro ({tasks.length})</h1>

      {tasks.length === 0 ? (
        <p style={{ color: '#888' }}>Задач пока нет. Отличная работа!</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onToggleStatus={handleToggleStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
