import { TableProps } from './table';

import styles from './table.module.css'

export default function TableHead({ children }: TableProps) {
    return (
        <div className={styles.tableHead}>
            {children}
        </div>
    );
}