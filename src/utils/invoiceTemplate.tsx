import React from 'react';
import styles from './InvoiceTemplate.module.css'

export const InvoiceTemplate: React.FC = () => {

  const data = [
    { cantidad: 1, descripcion: 'Referido venta. cierre 9610, Ona Residences Unidad 1E Edif. 8, Cliente: Massiel Perez / Michelle Sved', precioPorUnidad: 1000.00, valor: 2000.00 },
    { cantidad: 1, descripcion: 'Referido venta. cierre 9610, Ona Residences Unidad 1E Edif. 8, Cliente: Massiel Perez / Michelle Sved', precioPorUnidad: 1000.00, valor: 2000.00 },
    { cantidad: 1, descripcion: 'Referido venta. cierre 9610, Ona Residences Unidad 1E Edif. 8, Cliente: Massiel Perez / Michelle Sved', precioPorUnidad: 1000.00, valor: 2000.00 },
    { cantidad: 1, descripcion: 'Referido venta. cierre 9610, Ona Residences Unidad 1E Edif. 8, Cliente: Massiel Perez / Michelle Sved', precioPorUnidad: 1000.00, valor: 2000.00 },
  ];

  
  const totalValues = [
    { type: 'header', label: 'Los pagos pueden ser efectuados a una de las siguientes cuentas:' },
    { type: 'account', label: 'Cuenta de ahorros en dólares No.', accountNumber: '9606046409', bank: 'Banreservas' },
    { type: 'account', label: 'Cuenta de ahorros en pesos No.', accountNumber: '819245960', bank: 'Banco Popular' },
    { type: 'total', label: 'SUBTOTAL', value: 810.00 },
    { type: 'total', label: 'ITBIS', value: 145.80 },
    { type: 'total', label: 'TOTAL', value: 955.80 },
    { type: 'total', label: 'RETENCION 10%', value: 8100.00 },
    { type: 'total', label: 'RETENCION 18%', value: 145.80 },
    { type: 'total', label: 'TOTAL', value: 729.00 },
  ];

  const headerRowCount = totalValues.filter(item => item.type === 'account').length;

  return (
    <main className={styles.mainT}>
      <section>
        <h2 style={{marginRight:"180px"}}>Alejandro Paez Sanchez</h2>
        <h1 style={{ color: '#acb9ca', paddingLeft: '100px' }}>FACTURA</h1>
      </section>
      <div className={styles.data}>
        <h5 style={{ fontWeight: 'bold' }}>RNC: 12-12123-1</h5>
        <h5 style={{ fontStyle: 'normal', fontWeight: 'normal' }}>Dirección: </h5>
        <h5 style={{ fontStyle: 'normal', fontWeight: 'normal', marginTop: -20 }}>Santo Domingo </h5>
        <h5 style={{ fontStyle: 'normal', fontWeight: 'normal' }}>Telefono: </h5>
        <table>
          <tr>
            <td style={{ fontWeight: 'bold' }}>FECHA:</td>
            <td>01/12/2023</td>
            <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Nº DE FACTURA:</td>
            <td>B0100000002</td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Para:</td>
            <td>Credito Fiscal</td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td style={{ fontWeight: 'bold', textAlign: 'left' }}>VALIDO HASTA:</td>
            <td>31/12/2024</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Facturar a:</td>
            <td style={{ width: '30%' }}>TRADESDHOMES, S.R.L.
              RNC: 132147618
              <br />Dirección: Autopista San Isidro No. 2,
              Plaza Mónaco, Local 2-8
              Santo Domingo Este.
              <br />Teléfono: 809-534-5059
            </td>
          </tr>
        </table>
        
        <table style={{marginTop:"20px"}} className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableCell}>CANTIDAD</th>
              <th style={{width:'50%'}} className={styles.tableCell}>DESCRIPCIÓN</th>
              <th style={{width:'30%'}} className={styles.tableCell}>PRECIO POR UNIDAD</th>
              <th style={{width:'10%'}}className={styles.tableCell}>VALOR</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item, index) =>(
              <tr key={index}>
              <td>{item.cantidad}</td>
              <td>{item.descripcion}</td>
              <td>{item.precioPorUnidad}</td>
              <td>{item.valor}</td>
              </tr>
            ))}
            
            {totalValues.map((item, index) => (
            <tr key={index}>
            {index <= headerRowCount ? (
              <td colSpan={2} style={{ border: 'none', fontSize: "14px" }}>{item.label}{item.accountNumber} {item.bank}</td>
            ) : (
              <>
              <td colSpan={2} style={{border: 'none'}}></td>
                <td>{item.label}</td>
                <td>{item.value !== undefined ? item.value : ''}</td>
              </>
            )}
          </tr>
        ))}
          </tbody>
        </table>
      </div>
      <h4 style={{textAlign:'center'}}>Gracias por confiar en nosotros</h4>
    </main>
  )
};

