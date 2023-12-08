import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Divider } from '@mui/material';
import {InvoiceTemplate} from './invoiceTemplate';
import { FormState, Item } from './interfaces';

const InvoiceForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    fecha: new Date(),
    numeroFactura: '',
    facturarA: '',
    direccion: '',
    telefono: '',
    items: [{ cantidad: 1, descripcion: '', precioPorUnidad: 0, valor: 0}],
  });

  const clientAddresses = [
    "",
    "Calle El Alto No. 5, Los Rios",
    // Add more addresses as needed
  ];

  const invoiceDirection = [
    "",
    `TRADESDHOMES, S.R.L.
    RNC: 132147618
    Dirección: Autopista San Isidro No. 2,
    Plaza Mónaco, Local 2-8
    Santo Domingo Este.
    Teléfono: 809-534-5059`
  ]

  const handleSendData = () => {
    setFormState({
      fecha: formState.fecha,
      numeroFactura: formState.numeroFactura,
      facturarA: formState.facturarA,
      direccion: formState.direccion,
      telefono: formState.telefono,
      items: formState.items.map((item) => ({ ...item })),
    });
  };

  const handleChange = (key: keyof FormState, value: any) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleItemChange = (index: number, key: keyof Item, value: any) => {
    setFormState((prev) => {
      const newItems = [...prev.items];
      
      if (key === 'cantidad' || key === 'precioPorUnidad') {
        // If cantidad or precioPorUnidad is changed, update the valor
        const cantidad = key === 'cantidad' ? value : newItems[index].cantidad;
        const precioPorUnidad = key === 'precioPorUnidad' ? value : newItems[index].precioPorUnidad;
        newItems[index].valor = cantidad * precioPorUnidad;
      }
  
      newItems[index] = { ...newItems[index], [key]: value };
      return { ...prev, items: newItems };
    });
  };

  const handleAddItem = () => {
    setFormState((prev) => ({
      ...prev,
      items: [...prev.items, { cantidad: 1, descripcion: '', precioPorUnidad: 0, valor: 0 }],
    }));
  };

  const handleRemoveItem = (index: number) => {
    setFormState((prev) => {
      const newItems = [...prev.items];
      newItems.splice(index, 1);
      return { ...prev, items: newItems };
    });
  };

  return (
    <div>
      <label>Fecha:</label>
      <DatePicker selected={formState.fecha} onChange={(date: any) => handleChange('fecha', date)} dateFormat="dd/MM/yyyy"/>

      <label>Nº DE FACTURA:</label>
      <input
        type="text"
        value={formState.numeroFactura}
        onChange={(e) => handleChange('numeroFactura', e.target.value)}
      />

      <label>Facturar A:</label>
      <select value={formState.facturarA} onChange={(e) => handleChange('facturarA', e.target.value)}>
        {invoiceDirection.map((address, index) => (
          <option key={index} value={address}>
          {index === 0 ? 'Select an option' : 'TRADESDHOMES, S.R.L'}
          </option>
        ))}
      </select>

      <label>Direccion:</label>
      <select value={formState.direccion} onChange={(e) => handleChange('direccion', e.target.value)}>
        {clientAddresses.map((address, index) => (
          <option key={index} value={address}>
            {address}
          </option>
        ))}
      </select>
      <label>Telefono:</label>
      <input
        type="text"
        value={formState.telefono}
        onChange={(e) => handleChange('telefono', e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Descripcion</th>
            <th>Precio x Unidad</th>
            <th>Valor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formState.items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={item.cantidad}
                  onChange={(e) => handleItemChange(index, 'cantidad', +e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.descripcion}
                  onChange={(e) => handleItemChange(index, 'descripcion', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.precioPorUnidad}
                  onChange={(e) => handleItemChange(index, 'precioPorUnidad', +e.target.value)}
                />
              </td>
              <td><input
                  type="number"
                  value={item.cantidad * item.precioPorUnidad}
                  onChange={(e) => handleItemChange(index, 'valor', +e.target.value)}
                  disabled
                /></td>
              <td>
                <button onClick={() => handleRemoveItem(index)}>
                  <FaMinus />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddItem}>
        <FaPlus /> Add Item
      </button>
      <Divider />
      <button onClick={handleSendData}>Test pdf</button>
      <div>
      {formState && (
        <InvoiceTemplate data={formState}/>
      )}
      </div>
    </div>
  );
};

export default InvoiceForm;
