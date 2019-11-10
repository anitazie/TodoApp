import React from 'react';
import ReactTooltip from 'react-tooltip'
import { IconButton } from '../../icon/Icon';
import styles from './TobBarActionsContainer.module.scss';

export default function TobBarActionsContainer() {
	return <div className={styles.container}>
		<IconButton icon="plus" className={styles.icon}
			onClick={() => alert('plus')} data-tip="Add new todo" />
		<ReactTooltip place="bottom" type="dark" effect="solid" />
		<IconButton icon="check-circle" className={styles.icon}
			onClick={() => alert('circle')} data-tip="Show completed todos" />
		<IconButton icon="cog" className={styles.icon} onClick={() => alert('cog')} />
	</div>;
}
