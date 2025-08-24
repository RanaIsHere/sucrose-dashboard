'use client'

import Image from 'next/image';
import Header from '../../../components/header';
import Table from '../../../components/tables/table';
import TableHead from '../../../components/tables/tableHead';
import TableHeadItem from '../../../components/tables/tableHeadItem';
import TableRow from '../../../components/tables/tableRow';
import TableRowItem from '../../../components/tables/tableRowItem';
import styles from './page.module.css';
import Modal from '../../../components/modal';
import { useModal } from '../../../hooks/useModal';

export default function Items() {
    const { isOpen: isAddModalOpen, toggleModal: toggleAddModal } = useModal(false);
    const { isOpen: isConfirmModalOpen, toggleModal: toggleConfirmModal } = useModal(false);

    return (
        <div className={styles.page}>
            <Header />
            <Modal isOpen={isAddModalOpen} toggleModal={toggleAddModal} title='Add Item' >
                <p>Hello world!</p>
            </Modal>

            <Modal isOpen={isConfirmModalOpen} toggleModal={toggleConfirmModal} title='Are you sure?' >
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quis enim consequuntur doloribus odio nisi voluptates veniam? Aliquid nihil voluptas quam cumque laborum aperiam ratione maiores explicabo perspiciatis magnam. Illo.</p>
            </Modal>

            <main className={styles.main}>
                <div className={styles.actionGroup}>
                    <div className={styles.searchGroup}>
                        <div className={styles.searchBarContainer}>
                            <Image src="icons/magnifying-glass-icon.svg" alt="Search icon" width={48} height={48} className={styles.searchBarIcon} />
                            <input type="search" name="search-item" id="searchItem" placeholder='Search item' className={styles.searchBar} />
                        </div>

                        <Image src="icons/sort-icon.svg" alt="Sort table" width={48} height={48} />
                    </div>

                    {/* This might be a horrendous fix to contrast text, but who knows? */}
                    <div className={styles.crudGroup}>
                        <a href="#create" onClick={toggleAddModal}><span>Add</span></a>
                        <a href="#export" onClick={toggleConfirmModal}><span>Export</span></a>
                    </div>
                </div>

                <Table>
                    <TableHead>
                        <TableHeadItem><p>ID</p></TableHeadItem>
                        <TableHeadItem><p>Meal Name</p></TableHeadItem>
                        <TableHeadItem><p>Meal Type</p></TableHeadItem>
                        <TableHeadItem><p>Price</p></TableHeadItem>
                        <TableHeadItem><p>Perks</p></TableHeadItem>
                        <TableHeadItem><p>Actions</p></TableHeadItem>
                    </TableHead>

                    <TableRow>
                        <TableRowItem><p>CC1</p></TableRowItem>
                        <TableRowItem><p>Coffee Delights</p></TableRowItem>
                        <TableRowItem><p>Coffee Latte</p></TableRowItem>
                        <TableRowItem><p>$5.99</p></TableRowItem>
                        <TableRowItem>
                            <p className={styles.perks}>Delivery</p>
                            <p className={styles.perks}>Voucher</p>
                        </TableRowItem>
                        <TableRowItem>
                            <></>
                        </TableRowItem>
                    </TableRow>
                </Table>
            </main>
        </div>
    );
}