import Image from "next/image";

import Modal from "@/components/modal";
import { ModalProps } from "./modalType";
import { MealType } from "../types/mealType";

import { useModal } from "@/hooks/useModal";
import { useState } from "react";

import styles from './addItemModal.module.css';
import AddTypeModal from "./addTypeModal";

export default function AddItemModal({ isOpen, toggleModal }: ModalProps) {
    const { isOpen: isTypeModalOpen, toggleModal: toggleTypeModal } = useModal(false);

    const [mealTypes, setMealTypes] = useState<MealType[]>([
    ]);

    const confirmMealTypeChangeCallback = (mealType: MealType[]) => {
        setMealTypes(mealType);
        toggleTypeModal();
    }

    return (
        <Modal isOpen={isOpen} toggleModal={toggleModal} title='Add Meal' superimposedChildren={<AddTypeModal isOpen={isTypeModalOpen} toggleModal={toggleTypeModal} initialData={mealTypes} onConfirm={confirmMealTypeChangeCallback} />}>
            <form action="" method="post" className={styles.addForm}>
                <label htmlFor="mealImage">Thumbnail</label>
                <div className={styles.inputGroup}>
                    <input type="file" name="mealImage" id="mealImage" />
                </div>

                <label htmlFor="mealName">Meal Name</label>
                <div className={styles.inputGroup}>
                    <input type="text" name="mealName" id="mealName" />
                </div>

                <label htmlFor="mealType">Meal Type</label>
                <div className={styles.inputGroup}>
                    <select name="mealType" id="mealType">
                        {mealTypes.map((type) => (
                            <option key={type.id} value={type.name}>{type.name}</option>
                        ))}
                    </select>

                    <Image src="icons/plus-icon.svg" alt="Add type" width={32} height={32} onClick={toggleTypeModal} />
                </div>

                <label htmlFor="mealPrice">Price</label>
                <div className={styles.inputGroup}>
                    <p className={styles.currency}>$</p>
                    <input type="number" name="mealPrice" id="mealPrice" min={1.0} defaultValue={1.0} />
                </div>

                <label htmlFor="mealPrice">Perks</label>
                <div className={styles.inputGroup}>
                    <div className={styles.inputCheckbox}>
                        <input type="checkbox" name="deliveryPerk" id="deliveryPerk" />
                        <label htmlFor="deliveryPerk">Delivery</label>
                    </div>

                    <div className={styles.inputCheckbox}>
                        <input type="checkbox" name="voucherPerk" id="voucherPerk" />
                        <label htmlFor="voucherPerk">Voucher</label>
                    </div>
                </div>

                <div className={styles.buttonGroup}>
                    <button type="submit" className="outlineBtn"><span>Add Item</span></button>
                </div>
            </form>
        </Modal>
    )
}