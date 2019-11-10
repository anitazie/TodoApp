import React from 'react';
import cx from 'classnames';
import Icon from '../../../icon/Icon';
import styles from './Checkbox.module.scss';

export default function Checkbox({ onClick }) {
    const circleIcon = (
        <Icon icon="circle" className={cx(styles.icon, styles.circle)} />
    );
    const checkCircleIcon = (
        <Icon icon="check-circle" className={cx(styles.icon, styles.check)} />
    );
    return (
        <div className={styles.checkboxWrapper}>
            <div className={styles.checkbox} onClick={onClick}>
                {circleIcon}
                {checkCircleIcon}
            </div>
        </div>
    );
}
