import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>PDF Invoicer</h2>
      <ul>
        <li>
          <Link to="/">Home TEST</Link>
        </li>
        <li>
          <Link to="/invoice">Create Invoice</Link>
        </li>
      </ul>
    </div>
  );
}

function Home() {
  return <h1>Welcome to PDF Invoicer</h1>;
}

function InvoiceForm() {
  return (
    <div className="invoice-form">
      <h1>Create Invoice</h1>
      {/* Add your invoice form components here */}
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );

  function generatePDF() {
    // Add code to generate PDF here using the 'react-pdf' library.
  }
}

export default Sidebar;
