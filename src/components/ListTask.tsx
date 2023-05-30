import styles from "./ListTask.module.css";
import { Task } from "./AddTask";
import { Trash } from "phosphor-react";
import { useState } from "react";

interface ListTaskProps {
  tasks: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
  onDeleteTask: (content: string) => void;
}

export function ListTask({ tasks, onDeleteTask, setTask }: ListTaskProps) {
  const [taskComplete, setTaskComplete] = useState(0);
  const countTask = tasks.length === 0;

  function handleDeleteTask(content: string) {
    onDeleteTask(content);
  }

  function handleUpdateTask(taskUpdate: string) {
    const updateTask = tasks.map((item) => {
      if (item.content === taskUpdate) {
        return {
          ...item,
          isComplete: !item.isComplete,
        };
      }
      return item;
    });
    countCompleteTask(updateTask);
    setTask(updateTask);
  }

  function countCompleteTask(taskComplete: Task[]): void {
    const completTaskCount = taskComplete.reduce((count, task) => {
      return task.isComplete ? count + 1 : count;
    }, 0);
    setTaskComplete(completTaskCount);
  }

  return (
    <div className={styles.content}>
      <div className={styles.infoTask}>
        <div>
          <span>Tarefa criadas </span>
          <span>{tasks.length}</span>
        </div>
        <div>
          <span>Concluidas </span>
          {taskComplete && (
            <span>
              {taskComplete} de {tasks.length}
            </span>
          )}
        </div>
      </div>

      {countTask && (
        <div className={styles.tasks}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie trafas e organize seus itens a fazer</p>
        </div>
      )}
      <div>
        {tasks.map((item) => {
          return (
            <div key={item.content} className={styles.detailsTask}>
              <input
                type="checkbox"
                onClick={() => handleUpdateTask(item.content)}
              />
              <label
                className={
                  item.isComplete ? styles.isComplete : styles.isNotComplete
                }
              >
                {item.content}
              </label>
              <button onClick={() => handleDeleteTask(item.content)}>
                <Trash size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
