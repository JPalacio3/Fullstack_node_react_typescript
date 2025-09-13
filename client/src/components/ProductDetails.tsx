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
      <tr className="border-b border-gray-100 hover:bg-slate-200 text-center ">
        <td className="p-3 text-lg text-gray-800">{product.name}</td>
        <td className="p-3 text-lg text-gray-800 ">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800 ">{isAvailable}</td>
        <td className="p-3 text-lg text-gray-800 ">
          <div className="flex flex-col md:flex-row gap-2">
            <button
              onClick={() => navigate(`/productos/${product.id}/editar`)}
              className="bg-indigo-600 text-white rounded-lg w-full uppercase font-bold text-xs text-center p-2 shadow-md hover:bg-indigo-800 "
            >
              Editar
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
