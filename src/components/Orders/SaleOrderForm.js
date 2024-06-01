import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormControl, FormLabel, Input, NumberInput, NumberInputField } from '@chakra-ui/react';

const SaleOrderForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="customer_id" isInvalid={errors.customer_id}>
        <FormLabel>Customer ID</FormLabel>
        <Input type="number" {...register('customer_id', { required: 'Customer ID is required' })} />
      </FormControl>

      <FormControl id="customer_name" isInvalid={errors.customer_name}>
        <FormLabel>Customer Name</FormLabel>
        <Input {...register('customer_name', { required: 'Customer Name is required' })} />
      </FormControl>

      <FormControl id="sku_id" isInvalid={errors.sku_id}>
        <FormLabel>SKU ID</FormLabel>
        <Input type="number" {...register('sku_id', { required: 'SKU ID is required' })} />
      </FormControl>

      <FormControl id="price" isInvalid={errors.price}>
        <FormLabel>Price</FormLabel>
        <NumberInput>
          <NumberInputField {...register('price', { required: 'Price is required' })} />
        </NumberInput>
      </FormControl>

      <FormControl id="quantity" isInvalid={errors.quantity}>
        <FormLabel>Quantity</FormLabel>
        <NumberInput>
          <NumberInputField {...register('quantity', { required: 'Quantity is required' })} />
        </NumberInput>
      </FormControl>

      <FormControl id="invoice_no" isInvalid={errors.invoice_no}>
        <FormLabel>Invoice Number</FormLabel>
        <Input {...register('invoice_no', { required: 'Invoice Number is required' })} />
      </FormControl>

      <FormControl id="invoice_date" isInvalid={errors.invoice_date}>
        <FormLabel>Invoice Date</FormLabel>
        <Input type="date" {...register('invoice_date', { required: 'Invoice Date is required' })} />
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">Create Sale Order</Button>
    </form>
  );
};

export default SaleOrderForm;


