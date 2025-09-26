import {
  useNavigate,
  Form,
  type ActionFunctionArgs,
  redirect,
  useFetcher,
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
  const isAvailable = product.availability;
  const fetcher = useFetcher();
  const navigate = useNavigate();

  return (
    <>
      <tr className="border-b border-gray-400 hover:bg-slate-50 text-center block md:table-row">
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

          <fetcher.Form
            method="POST"
            onSubmit={(e) => {
              if (!confirm("¿CAMBIAR DISPONIBILIDAD?")) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              name="id"
              value={product.id}
              className={`${
                isAvailable
                  ? "text-green-600 hover:text-green-700 bg-green-50"
                  : "text-red-600 hover:text-red-700 bg-red-50"
              }
              rounded-lg p-1 uppercase font-bold w-full text-sm text-center hover:text-shadow-md border hover:cursor-pointer md:mt-0 mt-5
              `}
            >
              {isAvailable ? "Disponible" : "No Disponible"}
            </button>
          </fetcher.Form>
        </td>
        <td className=" p-3 text-lg text-gray-800 text-center md:justify-between block  gap-2 max-w-full md:table-cell">
          <div className="flex items-center gap-2 justify-between ">
            <button
              onClick={() => navigate(`/productos/${product.id}/editar`)}
              className="bg-indigo-600 text-white rounded-lg w-full uppercase font-bold text-xs text-center p-2 shadow-md hover:bg-indigo-800"
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
                className="bg-red-600 text-white rounded-lg w-full uppercase font-bold text-xs text-center p-2 shadow-md hover:bg-red-800"
              />
            </Form>
          </div>
        </td>
      </tr>
    </>
  );
}
