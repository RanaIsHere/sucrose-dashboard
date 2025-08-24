import { useState } from 'react';

export const useModal = (stateValue: boolean) => {
    const [isOpen, setIsOpen] = useState(stateValue);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return { isOpen, toggleModal };
}   