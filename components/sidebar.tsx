import Image from 'next/image';

import styles from './sidebar.module.css';
import ButtonGroup from './buttonGroup';
import ButtonItem from './buttonItem';

type isOpenableSidebarProps = {
    isOpenable: boolean,
    toggleSidebar: () => void
}

export default function Sidebar({ isOpenable, toggleSidebar }: isOpenableSidebarProps) {
    const cafeNickname: string = "Cloudy Curtain";
    const cafeOwner: string = "Ronald Berg";

    return (
        <aside className={`${styles.sidebar} ${isOpenable ? styles.sidebarOpen : ''}`}>
            <div className={styles.topGroup}>
                <div className={styles.sidebarHead}>
                    <p>Menu</p>
                    <Image src="icons/x-mark-icon.svg" alt="Close" width={64} height={64} onClick={toggleSidebar} />
                </div>

                <ButtonGroup onClick={toggleSidebar}>
                    <ButtonItem content="Home" linkHref="/" linkImage='icons/house-icon.svg' linkAlt='Home icon' width={48} height={48} />
                    <ButtonItem content="Items" linkHref="/items" linkImage='icons/box-icon.svg' linkAlt='Box icon' width={48} height={48} />
                    <ButtonItem content="Orders" linkHref="/" linkImage='icons/bell-icon.svg' linkAlt='Bell icon' width={48} height={48} />
                    <ButtonItem content="Users" linkHref="/" linkImage='icons/user-icon.svg' linkAlt='User icon' width={48} height={48} />
                    <ButtonItem content="Manage" linkHref="/" linkImage='icons/gear-icon.svg' linkAlt='Gear icon' width={48} height={48} />
                </ButtonGroup>
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