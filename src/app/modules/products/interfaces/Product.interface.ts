export interface Producto {
  _id:string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  cant?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

