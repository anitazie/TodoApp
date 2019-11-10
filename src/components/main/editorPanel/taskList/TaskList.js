import React from 'react'
import styles from './TaskList.module.scss'

export default function TaskList({ children }) {
    return <ul className={styles.list}>{children}</ul>
}
