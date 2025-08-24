'use client'

import { useState } from 'react';

import Image from 'next/image';
import Breadcrumbs from './breadcrumbs';
import Sidebar from './sidebar';

import styles from './header.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <Sidebar isOpenable={isOpen} toggleSidebar={openSidebar} />
            <Image src="icons/menu-icon.svg" alt="Open menu" width={48} height={48} onClick={openSidebar} />
            <Breadcrumbs />
        </header>
    );
}