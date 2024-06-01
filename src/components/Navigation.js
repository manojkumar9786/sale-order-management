import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { logout } = useAuth();

  return (
    <Flex as="nav" p="4" bg="teal.500" color="white" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/active-orders" mr="4">Active Orders</Link>
        <Link as={RouterLink} to="/completed-orders">Completed Orders</Link>
      </Box>
      <Box>
        <ThemeToggle />
        <Button onClick={logout} ml="4">Logout</Button>
      </Box>
    </Flex>
  );
};

export default Navigation;
