interface FormState {
  fecha: Date;
  numeroFactura: string;
  facturarA: string;
  direccion: string;
  telefono: string;
  items: Item[];
}

interface Item {
  cantidad: number;
  descripcion: string;
  precioPorUnidad: number;
  valor: number;
}

export type { FormState, Item };