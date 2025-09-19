import { useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const isAvailable = product.availability ? "Disponible" : "No Disponible";
  const navigate = useNavigate();

  return (
    <>
      <tr className="border-b border-gray-400 hover:bg-slate-100 text-center block md:table-row">
        <td className="p-3 text-lg text-gray-800 block md:table-cell text-right md:text-center">
          <span className="md:hidden float-left font-bold text-slate-500">
            Producto:{" "}
          </span>
          {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800 block md:table-cell text-right md:text-center">
          <span className="md:hidden float-left font-bold text-slate-500">
            Precio:{" "}
          </span>
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800 block md:table-cell text-right md:text-center">
          <span className="md:hidden float-left font-bold text-slate-500">
            Disponibilidad:{" "}
          </span>
          {isAvailable}
        </td>
        <td className="p-3 text-lg text-gray-800 block md:table-cell text-center md:text-center">
          <div className="flex flex-col md:flex-row gap-2">
            <button
              onClick={() => navigate(`/productos/${product.id}/editar`)}
              className="bg-indigo-600 text-white rounded-lg w-1/2 mx-auto md:w-full md:mx-0 uppercase font-bold text-xs text-center p-2 shadow-md hover:bg-indigo-800 "
            >
              Editar
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
