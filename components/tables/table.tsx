import styles from './table.module.css';

export type TableProps = {
    children: React.ReactNode
}

export default function Table({ children }: TableProps) {
    return (
        <div className={styles.table} role='table'>
            {children}
        </div>
    );
}