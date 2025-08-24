import styles from './buttonGroup.module.css';

type ButtonGroupProps = {
    children: React.ReactNode
    onClick: () => void
}

export default function ButtonGroup({ children, onClick }: ButtonGroupProps) {
    return (
        <div className={styles.buttonGroup} onClick={onClick}>
            {children}
        </div>
    );
}