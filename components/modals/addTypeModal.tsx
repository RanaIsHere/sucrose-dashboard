import Modal from "@/components/modal";
import Table from '@/components/tables/table';
import TableHead from '@/components/tables/tableHead';
import TableHeadItem from '@/components/tables/tableHeadItem';
import TableRow from '@/components/tables/tableRow';
import TableRowItem from '@/components/tables/tableRowItem';

import { ModalProps } from "./modalType";

import styles from './addTypeModal.module.css';

export default function AddTypeModal({ isOpen, toggleModal }: ModalProps) {
    return (
        <Modal title='Add Meal Type' isOpen={isOpen} toggleModal={toggleModal}>
            <div className={styles.buttonGroup}>
                <button className="outlineBtn"><span>Add</span></button>
                <button className="outlineBtn"><span>Confirm</span></button>
            </div>

            <Table>
                <TableHead>
                    <TableHeadItem><p>ID</p></TableHeadItem>
                    <TableHeadItem><p>Type</p></TableHeadItem>
                    <TableHeadItem><p>Actions</p></TableHeadItem>
                </TableHead>

                <TableRow>
                    <TableRowItem>1</TableRowItem>
                    <TableRowItem>Coffee Latte</TableRowItem>
                    <TableRowItem><button className="outlineBtn"><span>Delete</span></button></TableRowItem>
                </TableRow>
            </Table>
        </Modal>
    );
}