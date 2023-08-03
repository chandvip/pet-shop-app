import React, { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/services/Services';
import Store from './components/Store/Store';
import Contact from './components/Contact/Contact';
const App = () => {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/services' element={<Services />} />
          <Route path='/store' element={<Store />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
