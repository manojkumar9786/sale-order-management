import React, { useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import OrderModal from './OrderModal';

const CompletedOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Details</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map(order => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.details}</Td>
              <Td>
                <IconButton icon={<ViewIcon />} onClick={() => handleViewOrder(order)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedOrder && <OrderModal order={selectedOrder} onClose={() => setSelectedOrder(null)} readOnly />}
    </Box>
  );
};

export default CompletedOrders;
