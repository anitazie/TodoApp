import React from 'react';
import styles from './Header.module.scss';
import Icon from '../../../icon/Icon';

export default function Header() {
	return (
		<div className={styles.header}>
			<a href="#" className={styles.title}>
				<span>Inbox</span>
			</a>
			<div>
				<Icon icon="comment-alt" className={styles.actionButton} />
				<Icon icon="ellipsis-h" className={styles.actionButton} />
			</div>
		</div>
	)
}
