import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyPDF from './pdftest';
import Sidebar from './App';
import Login from './Login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Container>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/pdf" element={<MyPDF/>} />
      </Routes>
    </Container>
    </BrowserRouter>
);

