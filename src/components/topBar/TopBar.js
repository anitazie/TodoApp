import React from 'react';
import styles from './TopBar.module.scss';
import Logo from './logo/Logo';
import TobBarActionsContainer from './actionsContainer/TobBarActionsContainer';
import Search from './search/Search';

export default function TopBar() {
	return (
		<div className={styles.topBar}>
			<div className={styles.topBarInner}>
				<Logo />
				<div className={styles.leftSeparator} />
				<Search />
				<div className={styles.rightSeparator} />
				<TobBarActionsContainer />
			</div>
		</div>
	);
}
