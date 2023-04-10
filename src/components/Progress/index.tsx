import React from 'react';
import styles from './styles.module.css';
import buttonStyles from '../Button/styles.module.css';
import clsx from 'clsx';
import { Color } from '../Button';

export default function ({ progress, color }: { progress: number, color: Color }): JSX.Element {
    const buttonClass = `b-${color}`
    return (
        <div className="container">
        <div className={clsx(styles.progress)}>
            <div className={clsx(styles['progress-bar'], buttonStyles[buttonClass])} role="progressbar" style={{width: `${progress}%`}}>{`${progress}%`}
    </div>
            </div>
            </div>
    );
};
