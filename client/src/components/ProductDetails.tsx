import {
  useNavigate,
  Form,
  type ActionFunctionArgs,
  redirect,
} from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(params.id as Product["id"]);
    return redirect("/");
  }
}

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
        <td className=" p-3 text-lg text-gray-800 text-center md:justify-between block  gap-2 max-w-full md:table-cell">
          <div className="flex items-center gap-2 justify-between ">
            <button
              onClick={() => navigate(`/productos/${product.id}/editar`)}
              className="bg-indigo-600 text-white rounded-lg w-full uppercase font-bold text-xs text-center p-2 shadow-md hover:bg-indigo-800 "
            >
              Editar
            </button>

            <Form
              className="w-full"
              method="POST"
              action={`productos/${product.id}/eliminar`}
              onSubmit={(e) => {
                if (!confirm("¿Deseas Eliminar este producto?")) {
                  e.preventDefault();
                  return;
                }
              }}
            >
              <input
                type="submit"
                value={"Eliminar"}
                className="bg-red-600 text-white rounded-lg w-full uppercase font-bold text-xs text-center p-2 shadow-md hover:bg-red-800 "
              />
            </Form>
          </div>
        </td>
      </tr>
    </>
  );
}
