import Image from 'next/image';
import Link from 'next/link';

import styles from './sidebar.module.css';

type isOpenableSidebarProps = {
    isOpenable: boolean,
    toggleSidebar: () => void
}

export default function Sidebar({ isOpenable, toggleSidebar }: isOpenableSidebarProps) {
    const cafeNickname: string = "Cloudy Curtain";
    const cafeOwner: string = "Ronald Berg";

    return (
        <aside className={`${styles.sidebar} ${isOpenable ? styles.sidebarOpen : ''}`} onClick={toggleSidebar}>
            <div className={styles.topGroup}>
                <div className={styles.sidebarHead}>
                    <p>Menu</p>
                    <Image src="icons/x-mark-icon.svg" alt="Close" width={64} height={64} onClick={toggleSidebar} />
                </div>

                <div className={styles.buttonGroup}>
                    <Link href="/" className={styles.buttonItem}>
                        <Image src="icons/house-icon.svg" alt="Home icon" width={48} height={48} />
                        <p>Home</p>
                    </Link>

                    <Link href="/" className={styles.buttonItem}>
                        <Image src="icons/box-icon.svg" alt="Box icon" width={48} height={48} />
                        <p>Items</p>
                    </Link>

                    <Link href="/" className={styles.buttonItem}>
                        <Image src="icons/bell-icon.svg" alt="Bell icon" width={48} height={48} />
                        <p>Orders</p>
                    </Link>

                    <Link href="/" className={styles.buttonItem}>
                        <Image src="icons/user-icon.svg" alt="User icon" width={48} height={48} />
                        <p>Users</p>
                    </Link>

                    <Link href="/" className={styles.buttonItem}>
                        <Image src="icons/gear-icon.svg" alt="Gear icon" width={48} height={48} />
                        <p>Manage</p>
                    </Link>
                </div>
            </div>

            <div className={styles.sidebarAccount}>
                <div className={styles.accountInfo}>
                    <p>{cafeNickname}</p>
                    <p>Cafe by <b>{cafeOwner}</b></p>
                </div>
                <div className={styles.accountPicker}>
                    <Image src="icons/user-icon.svg" alt="User icon" width={64} height={64} />
                    <Image src="icons/caret-down-icon.svg" alt="Pick" width={48} height={48} />
                </div>
            </div>
        </aside>
    );
}