import { Link } from "react-router-dom";

export default function NewProducts() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-black text-slate-500">Registrar Producto</h2>

      <Link
        to="/"
        className="bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-400 rounded-md "
      >
        Volver
      </Link>
    </div>
  );
}
