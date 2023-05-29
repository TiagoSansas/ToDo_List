import styles from "./AddTask.module.css";
import { PlusCircle } from "phosphor-react";

export function AddTask() {
  return (
    <>
      <div className={styles.addTask}>
        <input placeholder="Adicione um nova tarefa" />
        <div className={styles.createButton}>
          <span>Criar</span>
          <span className={styles.icon}>
            <PlusCircle size={20} />
          </span>
        </div>
      </div>
    </>
  );
}
