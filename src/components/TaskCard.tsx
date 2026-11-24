import type { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

export function TaskCard({ task, onDelete, onToggleStatus }: TaskCardProps) {
  return (
    <div style={{ border: '1px solid #444', borderRadius: '8px', padding: '12px', marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>{task.title}</strong>
        <span>{task.priority.toUpperCase()}</span>
      </div>

      {task.description && <p style={{ color: '#aaa', margin: '8px 0' }}>{task.description}</p>}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
        <small>Статус: {task.status}</small>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => onToggleStatus(task.id)}>
            Сменить статус
          </button>
          <button onClick={() => onDelete(task.id)} style={{ color: '#ff6b6b' }}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
