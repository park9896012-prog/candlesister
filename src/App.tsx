import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Storefront from './Storefront';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Storefront />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
    </Routes>
  );
}
