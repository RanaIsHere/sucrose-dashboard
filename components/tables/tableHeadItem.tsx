import { TableProps } from './table';

import styles from './table.module.css'

export default function TableHeadItem({ children }: TableProps) {
    return (
        <div className={styles.tableHeadItem}>
            {children}
        </div>
    );
}