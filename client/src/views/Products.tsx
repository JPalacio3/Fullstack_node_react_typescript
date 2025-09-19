import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import type { Product } from "../types";

export async function loader() {
  const products = await getProducts();
  return products;
}

export default function Products() {
  const products = useLoaderData() as Product[];

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-500">Productos</h2>

        <Link
          to="/productos/nuevo"
          className="bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-400 rounded-md "
        >
          Agregar Producto
        </Link>
      </div>

      <div className="p-2 rounded-lg mt-5 shadow-lg bg-white">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white hidden md:table-header-group">
            <tr className=" ">
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
