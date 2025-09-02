import { Link } from "react-router-dom";

export default function Products() {
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
    </>
  );
}
