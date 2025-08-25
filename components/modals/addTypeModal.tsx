import Modal from "@/components/modal";
import Table from '@/components/tables/table';
import TableHead from '@/components/tables/tableHead';
import TableHeadItem from '@/components/tables/tableHeadItem';
import TableRow from '@/components/tables/tableRow';
import TableRowItem from '@/components/tables/tableRowItem';

import { useEffect, useState } from "react";
import { ModalProps } from "./modalType";
import { MealType } from "../types/mealType";

import styles from './addTypeModal.module.css';

type MealTypeProps = {
    initialData: MealType[],
    onConfirm: (mealType: MealType[]) => void
}

type AddTypeModalProps = ModalProps & MealTypeProps

export default function AddTypeModal({ isOpen, toggleModal, initialData, onConfirm }: AddTypeModalProps) {
    const [modalMealTypes, setModalMealTypes] = useState<MealType[]>(initialData);
    const [newMealTypeInput, setNewMealTypeInput] = useState('');

    useEffect(() => {
        setModalMealTypes(initialData);
    }, [initialData]);

    const handleAddType = () => {
        if (newMealTypeInput === null || newMealTypeInput === '') return;
        setModalMealTypes([...modalMealTypes, {
            id: Date.now(),
            name: newMealTypeInput.trim()
        }]);

        setNewMealTypeInput('');
    }

    const handleDeleteType = (id: number) => {
        setModalMealTypes(modalMealTypes.filter(type => type.id !== id));
    }

    const handleConfirm = () => {
        onConfirm(modalMealTypes);
    }

    return (
        <Modal title='Add Meal Type' isOpen={isOpen} toggleModal={toggleModal}>
            <div className={styles.buttonGroup}>
                <div className={styles.innerButtonGroup}>
                    <input type="text" name="mealType" id="mealType" placeholder="What's the type of meal?" value={newMealTypeInput} onChange={(e) => { setNewMealTypeInput(e.target.value) }} />
                    <button className="outlineBtn" onClick={handleAddType}><span>Add</span></button>
                </div>
                <button className="outlineBtn" onClick={handleConfirm}><span>Confirm</span></button>
            </div>

            <Table>
                <TableHead>
                    <TableHeadItem><p>ID</p></TableHeadItem>
                    <TableHeadItem><p>Type</p></TableHeadItem>
                    <TableHeadItem><p>Actions</p></TableHeadItem>
                </TableHead>

                {modalMealTypes.map((type, idx) => (
                    <TableRow key={type.id}>
                        <TableRowItem>{idx + 1}</TableRowItem>
                        <TableRowItem>{type.name}</TableRowItem>
                        <TableRowItem><button className="outlineBtn" onClick={() => { handleDeleteType(type.id) }}><span>Delete</span></button></TableRowItem>
                    </TableRow>
                ))}
            </Table>
        </Modal>
    );
}