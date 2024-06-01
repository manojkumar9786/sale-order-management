import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Login from './components/Auth/Login';
import ActiveOrders from './components/Orders/ActiveOrders';
import CompletedOrders from './components/Orders/CompletedOrders';
import Navigation from './components/Navigation';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/active-orders"
            element={
              <ProtectedRoute>
                <ActiveOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/completed-orders"
            element={
              <ProtectedRoute>
                <CompletedOrders />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
