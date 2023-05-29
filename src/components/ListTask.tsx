import styles from "./ListTask.module.css";

export function ListTask() {
  return (
    <div className={styles.content}>
      <div className={styles.infoTask}>
        <div>
          <span>Tarefa criadas </span>
          <span>0</span>
        </div>
        <div>
          <span>Concluidas </span>
          <span>0</span>
        </div>
      </div>
      <div className={styles.tasks}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie trafas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
