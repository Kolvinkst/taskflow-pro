import { initialTasks } from './data/mockTasks';

export function App() {
  return (
    <div>
      <h1>TaskFlow Pro</h1>
      <ul>
        {initialTasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> — [{task.status}] (Приоритет: {task.priority})
            {task.description && <p>{task.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;