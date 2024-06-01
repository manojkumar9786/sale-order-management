import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const OrderModal = ({ isOpen, onClose, order, isEditable, onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    if (order) {
      setValue('customer_id', order.customer_id);
      setValue('customer_name', order.customer_name);
      setValue('sku_id', order.sku_id);
      setValue('price', order.price);
      setValue('quantity', order.quantity);
      setValue('invoice_no', order.invoice_no);
      setValue('invoice_date', order.invoice_date);
    }
  }, [order, setValue]);

  const handleFormSubmit = (data) => {
    const updatedOrder = { ...order, ...data, last_modified: new Date().toISOString() };
    onSubmit(updatedOrder);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEditable ? 'Edit Sale Order' : 'View Sale Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={isEditable ? handleSubmit(handleFormSubmit) : undefined}>
            <FormControl id="customer_id" isReadOnly={!isEditable}>
              <FormLabel>Customer ID</FormLabel>
              <Input {...register('customer_id')} isReadOnly={!isEditable} />
            </FormControl>

            <FormControl id="customer_name" isReadOnly={!isEditable}>
              <FormLabel>Customer Name</FormLabel>
              <Input {...register('customer_name')} isReadOnly={!isEditable} />
            </FormControl>

            <FormControl id="sku_id" isReadOnly={!isEditable}>
              <FormLabel>SKU ID</FormLabel>
              <Input type="number" {...register('sku_id')} isReadOnly={!isEditable} />
            </FormControl>

            <FormControl id="price" isReadOnly={!isEditable}>
              <FormLabel>Price</FormLabel>
              <NumberInput>
                <NumberInputField {...register('price')} isReadOnly={!isEditable} />
              </NumberInput>
            </FormControl>

            <FormControl id="quantity" isReadOnly={!isEditable}>
              <FormLabel>Quantity</FormLabel>
              <NumberInput>
                <NumberInputField {...register('quantity')} isReadOnly={!isEditable} />
              </NumberInput>
            </FormControl>

            <FormControl id="invoice_no" isReadOnly={!isEditable}>
              <FormLabel>Invoice Number</FormLabel>
              <Input {...register('invoice_no')} isReadOnly={!isEditable} />
            </FormControl>

            <FormControl id="invoice_date" isReadOnly={!isEditable}>
              <FormLabel>Invoice Date</FormLabel>
              <Input type="date" {...register('invoice_date')} isReadOnly={!isEditable} />
            </FormControl>

            {isEditable && (
              <Button mt={4} colorScheme="teal" type="submit">
                Update Sale Order
              </Button>
            )}
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
