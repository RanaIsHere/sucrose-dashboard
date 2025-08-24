import styles from './breadcrumbs.module.css';

// TODO: Make Breadcrumbs() functional
export default function Breadcrumbs() {
    return (
        <div className={styles.breadcrumbs}>
            <p className={styles.origin}>Dashboard</p>
            <p className={styles.destinationArrow}>&gt;</p>
            <p className={styles.destination}>Home</p>
        </div>
    );
}