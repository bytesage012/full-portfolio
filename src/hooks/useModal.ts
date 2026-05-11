import { useState, useCallback } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState<any>(null);

    const openModal = useCallback((data?: any) => {
        setModalData(data || null);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setModalData(null);
        document.body.style.overflow = '';
    }, []);

    return { isOpen, modalData, openModal, closeModal };
};
