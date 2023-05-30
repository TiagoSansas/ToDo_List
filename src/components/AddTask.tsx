import styles from "./AddTask.module.css";
import { PlusCircle } from "phosphor-react";
import { ListTask } from "./ListTask";
import { ChangeEvent, FormEvent, useState } from "react";

export interface Task {
  content: string;
  isComplete: boolean;
}

export function AddTask() {
  const [tasks, setTask] = useState<Task[]>([]);
  const [addNewTask, setAddNewTask] = useState("");

  function handleAddTask(event: FormEvent) {
    event?.preventDefault();
    const newTaskObj: Task = { content: addNewTask, isComplete: false };
    setTask((prev) => [...prev, newTaskObj]);
    setAddNewTask("");
  }

  function handleNewTask({ target }: ChangeEvent<HTMLInputElement>) {
    setAddNewTask(target.value);
  }

  function handleDelete(taskDelete: any) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.content !== taskDelete;
    });
    setTask(tasksWithoutDeleteOne);
  }

  return (
    <>
      <form onSubmit={handleAddTask}>
        <div className={styles.addTask}>
          <input
            placeholder="Adicione um nova tarefa"
            value={addNewTask}
            onChange={handleNewTask}
          />
          <button type="submit" className={styles.createButton}>
            <span>Criar</span>
            <span className={styles.icon}>
              <PlusCircle size={20} />
            </span>
          </button>
        </div>
      </form>
      <div>
        <ListTask tasks={tasks} setTask={setTask} onDeleteTask={handleDelete} />
      </div>
    </>
  );
}
