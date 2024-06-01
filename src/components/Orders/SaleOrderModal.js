import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderModal = ({ onCreateSaleOrder }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFormSubmit = (data) => {
    const newOrder = {
      ...data,
      id: Date.now(),
      last_modified: new Date().toISOString(),
    };
    onCreateSaleOrder(newOrder);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">+ Sale Order</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaleOrderForm onSubmit={handleFormSubmit} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SaleOrderModal;
