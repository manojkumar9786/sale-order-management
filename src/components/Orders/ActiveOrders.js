import React, { useEffect } from 'react';
import SaleOrderModal from './SaleOrderModal';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import OrderModal from './OrderModal';

const ActiveOrders = () => {
  const [orders, setOrders] = React.useState(() => {
        const storedOrders = localStorage.getItem('orders');
        return storedOrders ? JSON.parse(storedOrders) : [];
  });
  const [selectedOrder, setSelectedOrder] = React.useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);

  const handleCreateSaleOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsViewModalOpen(true);
  };

  return (
    <Box p={5}>
      <SaleOrderModal onCreateSaleOrder={handleCreateSaleOrder} />
      <Table variant="simple" mt={5}>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified</Th>
            <Th>Edit</Th>
            <Th>View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customer_name}</Td>
              <Td>{order.price}</Td>
              <Td>{new Date(order.last_modified).toLocaleString()}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  onClick={() => handleEditOrder(order)}
                />
              </Td>
              <Td>
                <IconButton
                  icon={<ViewIcon />}
                  onClick={() => handleViewOrder(order)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Edit Order Modal */}
      {selectedOrder && (
        <OrderModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          order={selectedOrder}
          isEditable={true}
          onSubmit={(updatedOrder) => {
            setOrders(orders.map(order => order.id === updatedOrder.id ? updatedOrder : order));
            setIsEditModalOpen(false);
          }}
        />
      )}

      {/* View Order Modal */}
      {selectedOrder && (
        <OrderModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          order={selectedOrder}
          isEditable={false}
        />
      )}
    </Box>
  );
};

export default ActiveOrders;
