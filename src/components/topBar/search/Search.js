import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Search.module.scss';
import Icon from '../../icon/Icon';

export default function Search() {
	const [focused, setFocused] = useState(false);

	return (
		<div className={styles.searchContainer}>
			<input
				type="search"
				placeholder="Quick Find"
				spellCheck="false"
				autoComplete="off"
				autoCorrect="off"
				className={styles.search}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>
			<Icon icon="search" className={cx(styles.icon, { [styles.iconFocused]: focused })} />
		</div>
	);
}