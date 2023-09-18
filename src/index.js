import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppBar, Toolbar} from '@mui/material';
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyPDF from './pdftest';
import Sidebar from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AppBar position='inline'><Toolbar>Formulario</Toolbar></AppBar>
    <Container>
      <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/pdf" element={<MyPDF/>} />
      </Routes>
    </Container>
    </BrowserRouter>
);

