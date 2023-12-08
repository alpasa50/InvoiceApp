interface InvoiceTemplateProps {
  data: {
    fecha: Date;
    numeroFactura: string;
    facturarA: string;
    direccion: string;
    telefono: string;
    items: Array<{
      cantidad: number;
      descripcion: string;
      precioPorUnidad: number;
      valor: number;
    }>;
  };
  //totalValues: any[]; // Adjust the type as per your totalValues structure
}

export default InvoiceTemplateProps;