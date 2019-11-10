import React from 'react';
import styles from './Main.module.scss';

export default function main({ children }) {
	return <main className={styles.contentWrapper}>{children}</main>;
}