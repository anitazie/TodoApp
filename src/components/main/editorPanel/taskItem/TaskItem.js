import React from 'react';
import styles from './TaskItem.module.scss';
import Checkbox from './Checkbox';

export default function TaskItem({ task: { text, id }, onComplete }) {
    return (
        <li className={styles.taskItem}>
            <div className={styles.taskItemDetails}>
                <Checkbox onClick={() => onComplete(id)}/>
                <div className={styles.taskContentItem}>
                    <span className={styles.itemContent}>{text}</span>
                </div>
            </div>
        </li>
    );
}
