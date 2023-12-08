import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App';
import Login from './screens/Login/Login';
import Dashboard from './screens/Dashboard/Dashboard';
import {InvoiceTemplate} from './utils/invoiceTemplate';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/test" element={<InvoiceTemplate/>} /> */}
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
);

