import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalFooter,
    Button
} from 'reactstrap';
import Context from '../../Context';

const CustomModal = () => (
    <Context.Consumer>
        {
            ({ toggleModal, modal, removeProduct }) => {
                const toggleModalFn = () => toggleModal();
                const removeProductFn = () => removeProduct(modal.data.id);
                return (
                    <Modal isOpen={modal.isOpen} centered className="text-danger">
                        <ModalHeader>Czy chcesz całkowicie usunąć {modal.data.name}?</ModalHeader>
                        <ModalFooter>
                            <Button color="danger" onClick={removeProductFn}>Usuń</Button>{' '}
                            <Button color="secondary" onClick={toggleModalFn}>Anuluj</Button>
                        </ModalFooter>
                    </Modal> 
                )
            }
        }

    </Context.Consumer>

)

export default CustomModal;