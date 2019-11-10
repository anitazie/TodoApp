import React from 'react';
import { IconButton } from '../../icon/Icon';
import styles from './Logo.module.scss';

export default function Logo() {
	return (
		<a href="#" className={styles.logo}>
			<IconButton icon="apple-alt" className={styles.icon} />
		</a>
	);
}