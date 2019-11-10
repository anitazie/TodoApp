import React from 'react';
import cx from 'classnames';
import styles from './Icon.module.scss';

export function IconButton({ icon, className, iconClassName, onClick, ...other }) {
	const iconContainerClasses = cx(styles.iconButton, className);
	return (
		<div className={iconContainerClasses} onClick={onClick} {...other}>
			<Icon icon={icon} className={iconClassName} />
		</div>
	);
}

export default function Icon({ icon, className }) {
	const iconClasses = `fas fa-${icon}`;
	return <i className={cx(iconClasses, styles.icon, className)}></i>;
}
