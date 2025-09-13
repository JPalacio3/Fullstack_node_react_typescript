import type { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const isAvailable = product.availability ? "Disponible" : "No Disponible";

  return (
    <>
      <tr className="border-b border-gray-100 hover:bg-slate-200 text-center ">
        <td className="p-3 text-lg text-gray-800">{product.name}</td>
        <td className="p-3 text-lg text-gray-800 ">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800 ">{isAvailable}</td>
        <td className="p-3 text-lg text-gray-800 "></td>
      </tr>
    </>
  );
}
