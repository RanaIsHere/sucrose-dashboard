import { TableProps } from './table';

import styles from './table.module.css'

export default function TableRowItem({ children }: TableProps) {
    return (
        <div className={styles.tableRowItem}>
            {children}
        </div>
    );
}