import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export type Color = 'green' | 'red' | 'orange' | 'blue'

export default function ({ color, label }: { color: Color, label: string }): JSX.Element{
    const buttonClass = `b-${color}`
    return (
        <a href="#" className={clsx(styles.button2, styles[buttonClass])}>{label}</a>
    );
}
