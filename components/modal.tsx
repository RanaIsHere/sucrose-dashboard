import { HTMLAttributes } from 'react';
import styles from './modal.module.css';
import Image from 'next/image';

type ModalProps = {
    isOpen: boolean,
    toggleModal: () => void,
    title: string,
    className?: HTMLAttributes<HTMLDivElement>,
    children?: React.ReactNode
}

export default function Modal({ isOpen, toggleModal, title, className, children }: ModalProps) {
    return (
        <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}>
            <div className={`${styles.modalBody} ${className}`}>
                <div className={styles.modalAction}>
                    <p className={styles.modalTitle}>{title}</p>
                    <Image src="icons/x-mark-icon-black.svg" alt="Close modal" width={64} height={64} onClick={toggleModal} />
                </div>

                {children}
            </div>
        </div >
    );
}