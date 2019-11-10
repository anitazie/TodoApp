import React from 'react';
import styles from './EditorPanel.module.scss';
import Header from './header/Header';
import TaskList from './taskList/TaskList';
import TaskItem from './taskItem/TaskItem';

export default function EditorPanel({ tasks, onTaskComplete }) {
    return (
        <div className={styles.panel}>
            <Header />
            <div>Not completed:</div>
            <TaskList>
                {tasks
                    .filter(({ completed }) => !completed)
                    .map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onComplete={onTaskComplete}
                        />
                    ))}
            </TaskList>
        </div>
    );
}
