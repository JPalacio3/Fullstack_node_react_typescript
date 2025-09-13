import type { PropsWithChildren } from "react";

function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <div className="bg-red-600 text-white p-3 my-4 font-bold uppercase text-center  rounded-xl">
      {children}
    </div>
  );
}

export default ErrorMessage;
