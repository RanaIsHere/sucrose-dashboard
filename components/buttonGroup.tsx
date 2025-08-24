import Image from 'next/image';
import Link from "next/link";

import styles from './buttonGroup.module.css';

type ButtonGroupProps = {
    children: React.ReactNode
}

export default function ButtonGroup({ children }: ButtonGroupProps) {
    return (
        <div className={styles.buttonGroup}>
            {children}
        </div>
    );
}