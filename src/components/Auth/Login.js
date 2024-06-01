import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Box, Button, Input, FormControl, FormLabel, Heading } from '@chakra-ui/react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Heading mb="6">Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb="4">
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
